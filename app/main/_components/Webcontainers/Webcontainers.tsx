import React, { useEffect, useState, useRef } from "react";
import { WebContainer } from "@webcontainer/api";

import { useWebContainerStore } from "@/store/useWebContainerStore";
import Preview from "./Preview";
import { AnimatedLoader } from "../Animations/AnimatedLoader";
import ShinyText from "@/components/ShinyText";

type AiFile = {
  path: string;
  contents: string;
};

interface ChatBoxProps {
  object: { files: AiFile[] } | undefined;
  isLoading?: boolean; // ⭐ Add this prop to know when streaming is done
}

declare global {
  interface Window {
    __webcontainer_instance__?: WebContainer;
    __webcontainer_booting__?: boolean;
    __webcontainer_boot_promise__?: Promise<WebContainer>;
  }
}

async function getWebContainerInstance(): Promise<WebContainer> {
  if (typeof window !== "undefined" && window.__webcontainer_instance__) {
    console.log("♻️  Reusing existing WebContainer from window");
    return window.__webcontainer_instance__;
  }

  if (typeof window !== "undefined" && window.__webcontainer_booting__) {
    console.log("⏳ WebContainer already booting, waiting...");
    if (window.__webcontainer_boot_promise__) {
      return window.__webcontainer_boot_promise__;
    }
  }

  console.log("🚀 Booting WebContainer for the first time...");

  if (typeof window !== "undefined") {
    window.__webcontainer_booting__ = true;
  }

  const bootPromise = WebContainer.boot()
    .then((instance) => {
      console.log("✅ WebContainer booted successfully");
      if (typeof window !== "undefined") {
        window.__webcontainer_instance__ = instance;
        window.__webcontainer_booting__ = false;
      }
      return instance;
    })
    .catch((err) => {
      console.error("❌ Failed to boot WebContainer:", err);
      if (typeof window !== "undefined") {
        window.__webcontainer_booting__ = false;
        window.__webcontainer_boot_promise__ = undefined;
      }
      throw err;
    });

  if (typeof window !== "undefined") {
    window.__webcontainer_boot_promise__ = bootPromise;
  }

  return bootPromise;
}

function areFilesComplete(files: AiFile[]): boolean {
  return files.every(
    (file) =>
      file &&
      typeof file.path === "string" &&
      file.path.length > 0 &&
      typeof file.contents === "string" &&
      file.contents.length > 0
  );
}

function hasRequiredFiles(files: AiFile[]): boolean {
  const paths = files.map((f) => f.path).filter(Boolean);
  return (
    paths.includes("package.json") &&
    paths.some((p) => p.includes("index.html")) &&
    paths.some((p) => p.includes("src/App.jsx") || p.includes("src/App.tsx"))
  );
}

const FALLBACK_VITE_CONFIG = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`;

export default function WebContainers({ object, isLoading }: ChatBoxProps) {
  const { setWebContainer } = useWebContainerStore();
  const [isReady, setIsReady] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [installLogs, setInstallLogs] = useState<string[]>([]);
  const [serverUrl, setServerUrl] = useState<string>(""); // ⭐ Add this
  const devProcessRef = useRef<any>(null);
  const hasRunSetupRef = useRef<boolean>(false); // ⭐ Track if we've already set up

  useEffect(() => {
    // ⭐ WAIT for streaming to complete before doing anything
    if (isLoading) {
      console.log("⏳ AI is still generating files...");
      return;
    }

    // Guard: No data yet
    if (!object?.files || object.files.length === 0) {
      console.log("⏳ Waiting for files...");
      setIsReady(false);
      return;
    }

    if (!areFilesComplete(object.files)) {
      console.log("⏳ Files incomplete...");
      setIsReady(false);
      return;
    }

    if (!hasRequiredFiles(object.files)) {
      console.log("⏳ Missing required files...");
      setIsReady(false);
      return;
    }

    // ⭐ Only run setup ONCE when streaming is complete
    if (hasRunSetupRef.current) {
      console.log("✓ Setup already completed, skipping");
      return;
    }

    hasRunSetupRef.current = true;
    let isMounted = true;

    const setupWebContainer = async () => {
      try {
        setError(null);
        setInstallLogs([]);
        setIsReady(false);

        console.log("🎬 Starting WebContainer setup (streaming complete)");

        const instance = await getWebContainerInstance();

        if (!isMounted) return;

        // Kill previous dev server if exists
        if (devProcessRef.current) {
          console.log("🛑 Killing previous dev server...");
          devProcessRef.current.kill();
          devProcessRef.current = null;
        }

        // Build file system
        const fileSystem: Record<string, any> = {};

        for (const file of object.files) {
          if (!file || !file.path || typeof file.path !== "string") {
            continue;
          }

          let contents = file.contents || "";

          // ⭐ Fix vite.config.js if broken
          if (
            file.path === "vite.config.js" ||
            file.path === "vite.config.ts"
          ) {
            if (
              contents.includes("from 'vite'import") ||
              !contents.includes("export default")
            ) {
              console.warn("⚠️ Using fallback vite.config.js");
              contents = FALLBACK_VITE_CONFIG;
            }
          }

          const pathParts = file.path.split("/").filter((p) => p);
          if (pathParts.length === 0) continue;

          const fileName = pathParts.pop()!;
          let current = fileSystem;

          for (const dir of pathParts) {
            if (!current[dir]) {
              current[dir] = { directory: {} };
            }
            current = current[dir].directory;
          }

          current[fileName] = {
            file: { contents },
          };
        }

        console.log("📂 Mounting file system:", Object.keys(fileSystem));
        await instance.mount(fileSystem);

        if (!isMounted) return;
        setWebContainer(instance);

        // ⭐ Run npm install ONCE
        console.log("📦 Installing dependencies (one time)...");
        const installProcess = await instance.spawn("npm", ["install"]);

        const logs: string[] = [];
        installProcess.output.pipeTo(
          new WritableStream({
            write(data) {
              const logLine = data.toString();
              console.log("📦", logLine);
              logs.push(logLine);
              setInstallLogs([...logs]);
            },
          })
        );

        const installExitCode = await installProcess.exit;

        if (installExitCode !== 0) {
          const errorMessage = logs.join("\n").slice(-500);
          throw new Error(`npm install failed\n\n${errorMessage}`);
        }

        if (!isMounted) return;

        // ⭐ Start dev server ONCE
        console.log("🔥 Starting dev server (one time)...");
        const devProcess = await instance.spawn("npm", ["run", "dev"]);

        devProcessRef.current = devProcess;

        // ⭐ Wait for the server to be ready and get the URL
        instance.on("server-ready", (port, url) => {
          console.log("🎉 Dev server ready at:", url);
          setServerUrl(url); // Add this state
        });

        devProcess.output.pipeTo(
          new WritableStream({
            write(data) {
              console.log("🔥", data);
            },
          })
        );

        setIsReady(true);
        console.log("✅ WebContainer setup complete!");
      } catch (err: any) {
        console.error("❌ WebContainer setup error:", err);
        if (isMounted) {
          setError(err.message || "Unknown error");
          setIsReady(false);
          hasRunSetupRef.current = false; // Allow retry
        }
      }
    };

    setupWebContainer();

    return () => {
      isMounted = false;
    };
  }, [isLoading, object?.files]); // ⭐ Re-run when isLoading changes

  // Streaming in progress
  if (isLoading) {
    return (
      <div className="h-dvh p-2 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-6xl mb-4">🤖</div>
          <p className="text-gray-500 text-lg">AI is generating files...</p>
          <p className="text-gray-400 text-sm mt-2">
            {object?.files?.length || 0} files received so far
          </p>
          <div className="mt-4 flex gap-2 justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  if (!object?.files || object.files.length === 0) {
    return (
      <div className="h-dvh flex flex-col justify-center items-center mx-auto ">
        <ShinyText
          text="Your Preview will come here ..."
          disabled={false}
          speed={2.5}
          className="custom-class text-center "
        />
        <div className="w-xl mx-auto">

        <AnimatedLoader />
        </div>
      </div>
    );
  }

  if (!areFilesComplete(object.files) || !hasRequiredFiles(object.files)) {
    return (
      <div className="h-dvh p-2 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-6xl mb-4">📋</div>
          <p className="text-gray-500 text-lg">Validating files...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-dvh p-2 flex items-center justify-center overflow-auto">
        <div className="text-center max-w-2xl w-full">
          <div className="text-6xl mb-4">❌</div>
          <p className="text-red-500 font-semibold text-lg mb-2">Setup Error</p>
          <div className="text-left bg-gray-900 p-4 rounded text-xs text-gray-300 overflow-auto max-h-96 mb-4">
            <pre className="whitespace-pre-wrap">{error}</pre>
          </div>
          <button
            onClick={() => {
              hasRunSetupRef.current = false;
              setError(null);
              window.location.reload();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!isReady) {
    return (
      <div className="h-dvh p-2 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">⚙️</div>
          <p className="text-gray-500 text-lg">Setting up project...</p>
          <p className="text-gray-400 text-sm mt-2">
            Installing {object.files.length} files
          </p>

          {installLogs.length > 0 && (
            <div className="mt-4 bg-black p-3 rounded text-xs text-gray-400 max-w-md mx-auto max-h-32 overflow-auto text-left">
              {installLogs.slice(-5).map((log, i) => (
                <div key={i}>{log}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="h-dvh p-2">
      <Preview serverUrl={serverUrl} /> {/* ⭐ Pass URL */}
    </div>
  );
}
