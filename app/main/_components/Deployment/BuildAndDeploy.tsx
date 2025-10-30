
import type { WebContainer } from "@webcontainer/api";

export async function buildAndDeploy(webContainer: WebContainer) {
  // 1. Run build
  const buildProcess = await webContainer.spawn("npm", ["run", "build"]);
  const buildLogs: string[] = [];
  
  buildProcess.output.pipeTo(
    new WritableStream({
      write(chunk) {
        const line = chunk.toString();
        buildLogs.push(line);
      },
    })
  );

  const buildExit = await buildProcess.exit;
  if (buildExit !== 0) {
    throw new Error(
      `Build failed (exit ${buildExit}). Recent build output:\n${buildLogs
        .slice(-200)
        .join("")}`
    );
  }

  // 2. Detect build output directory
  const candidates = ["/dist", "/build", "/out"];
  let outputDir: string | null = null;

  for (const candidate of candidates) {
    try {
      await webContainer.fs.readdir(candidate, { withFileTypes: true });
      outputDir = candidate;
      console.log("✅ Build output detected at:", candidate);
      break;
    } catch (e) {
      // Directory doesn't exist, continue
    }
  }

  if (!outputDir) {
    let rootList: string[] = [];
    try {
      const rootEntries = await webContainer.fs.readdir("/", { withFileTypes: true });
      rootList = rootEntries.map(e => e.name);
    } catch (e) {
      // ignore
    }
    throw new Error(
      `No build output folder found. Checked: ${candidates.join(
        ", "
      )}. Root contents: ${JSON.stringify(rootList)}\n\nRecent build logs:\n${buildLogs.join(
        ""
      )}`
    );
  }

  // 3. Collect all files recursively
  const filesList: { path: string; data: Uint8Array }[] = [];
  
  async function collectFiles(basePath: string) {
    const entries = await webContainer.fs.readdir(basePath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = `${basePath}/${entry.name}`;
      
      if (entry.isFile()) {
        const fileData = await webContainer.fs.readFile(fullPath);
        // Remove leading slash and output directory prefix
        const relativePath = fullPath.replace(outputDir!, "").replace(/^\//, "");
        filesList.push({ path: relativePath, data: fileData });
      } else if (entry.isDirectory()) {
        await collectFiles(fullPath);
      }
    }
  }

  await collectFiles(outputDir);

  // 4. Build manifest for Cloudflare Pages
  const manifest: { format: number; files: Record<string, string> } = {
    format: 1,
    files: {},
  };

  const digestHex = async (u8: Uint8Array) => {
    const hash = await crypto.subtle.digest("SHA-256", u8);
    return Array.from(new Uint8Array(hash))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  };

  const form = new FormData();
  
  for (const file of filesList) {
    const sha = await digestHex(file.data);
    manifest.files[file.path] = sha;
    const blob = new Blob([file.data], { type: "application/octet-stream" });
    form.append(sha, blob, file.path);
  }

  form.append("manifest", JSON.stringify(manifest));

  // 5. Deploy to Cloudflare Pages
  const res = await fetch("/api/deploy", {
    method: "POST",
    body: form,
  });

  const text = await res.text();
  let data: any = null;
  
  try {
    data = JSON.parse(text);
  } catch (e) {
    throw new Error(
      `Deploy endpoint returned non-JSON response (status ${res.status}):\n${text}`
    );
  }

  if (!res.ok) {
    throw new Error(
      `Deploy failed (HTTP ${res.status}): ${JSON.stringify(data, null, 2)}`
    );
  }

  if (!data?.success) {
    throw new Error(
      `Deploy API returned success=false:\n${JSON.stringify(data, null, 2)}`
    );
  }

  console.log("🚀 Deployment successful!");
  return data; // { url: string, success: true }
}
