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
    <div className="h-full w-full flex flex-col bg-gray-900">
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-sm text-gray-300 font-mono truncate">
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
