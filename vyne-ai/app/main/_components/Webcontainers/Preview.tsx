import { useEffect, useRef, useState } from "react";


interface PreviewProps {

  serverUrl?: string; // ⭐ Add this
}

export default function Preview({ serverUrl }: PreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (serverUrl && iframeRef.current) {
      console.log("🖼️ Loading preview:", serverUrl);
      iframeRef.current.src = serverUrl;
    }
  }, [serverUrl]);

  if (!serverUrl) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">🔄</div>
          <p className="text-lg">Waiting for dev server URL...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col bg-black">
      <div className="bg-black px-4 py-2 flex items-center gap-2 border-b border-neutral-800">
        <div className="flex-1 bg-neutral-900  border border-neutral-800 rounded px-3 py-1 text-sm text-gray-300 font-mono truncate">
          {serverUrl}
        </div>
      </div>
      <iframe
        ref={iframeRef}
        className="flex-1 w-full border-0 bg-white"
        title="Preview"
      />
    </div>
  );
}


// "use client";

// import {
//   WebPreview,
//   WebPreviewBody,
//   WebPreviewConsole,
//   WebPreviewNavigation,
//   WebPreviewNavigationButton,
//   WebPreviewUrl,
// } from "@/components/ai-elements/web-preview";
// import {
//   ArrowLeftIcon,
//   ArrowRightIcon,
//   ExternalLinkIcon,
//   Maximize2Icon,
//   MousePointerClickIcon,
//   RefreshCcwIcon,
// } from "lucide-react";
// import { useState } from "react";


// interface PreviewProps {

//   serverUrl?: string; // ⭐ Add this
// }

// const exampleLogs = [
//   {
//     level: "log" as const,
//     message: "Page loaded successfully",
//     timestamp: new Date(Date.now() - 10_000),
//   },
//   {
//     level: "warn" as const,
//     message: "Deprecated API usage detected",
//     timestamp: new Date(Date.now() - 5000),
//   },
//   {
//     level: "error" as const,
//     message: "Failed to load resource",
//     timestamp: new Date(),
//   },
// ];

// const Preview = ({ serverUrl }:PreviewProps) => {
//   const [fullscreen, setFullscreen] = useState(false);

//   return (
//     <WebPreview
//       defaultUrl="/"
//       onUrlChange={(serverUrl) => console.log("URL changed to:", serverUrl)}
//       style={{ height: "400px" }}
//     >
//       <WebPreviewNavigation>
//         <WebPreviewNavigationButton
//           onClick={() => console.log("Go back")}
//           tooltip="Go back"
//         >
//           <ArrowLeftIcon className="size-4" />
//         </WebPreviewNavigationButton>
//         <WebPreviewNavigationButton
//           onClick={() => console.log("Go forward")}
//           tooltip="Go forward"
//         >
//           <ArrowRightIcon className="size-4" />
//         </WebPreviewNavigationButton>
//         <WebPreviewNavigationButton
//           onClick={() => console.log("Reload")}
//           tooltip="Reload"
//         >
//           <RefreshCcwIcon className="size-4" />
//         </WebPreviewNavigationButton>
//         <WebPreviewUrl />
//         <WebPreviewNavigationButton
//           onClick={() => console.log("Select")}
//           tooltip="Select"
//         >
//           <MousePointerClickIcon className="size-4" />
//         </WebPreviewNavigationButton>
//         <WebPreviewNavigationButton
//           onClick={() => console.log("Open in new tab")}
//           tooltip="Open in new tab"
//         >
//           <ExternalLinkIcon className="size-4" />
//         </WebPreviewNavigationButton>
//         <WebPreviewNavigationButton
//           onClick={() => setFullscreen(!fullscreen)}
//           tooltip="Maximize"
//         >
//           <Maximize2Icon className="size-4" />
//         </WebPreviewNavigationButton>
//       </WebPreviewNavigation>

//       <WebPreviewBody src="http://localhost:5173"/>

//       <WebPreviewConsole logs={exampleLogs} />
//     </WebPreview>
//   );
// };

// export default Preview;
