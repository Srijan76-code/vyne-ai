"use client";
import { useEffect, useState } from "react";
import Folder from "./Folder";
import buildExplorerFromBoilerplate from "./demo";
import explorer from "@/data/folderData";

interface ExplorerItem {
  id: string;
  name: string;
  isFolder: boolean;
  items?: ExplorerItem[];
}

type AiFile = {
  path: string;
  contents: string;
};

interface ObjectWithFiles {
  object?: { files: AiFile[] };
}

export default function MainExplorer({ object }: ObjectWithFiles) {
  const [explorerData, setExplorerData] = useState<ExplorerItem | null>(null);

  // Update explorer whenever object.files changes
  useEffect(() => {
    if (!object?.files || object.files.length === 0) {
      console.log("No files yet, clearing explorer");
      setExplorerData(null);
      return;
    }

    console.log("Building explorer from", object.files.length, "files");
    const newData = buildExplorerFromBoilerplate(object.files, {
      rootName: "files",
    });
    console.log("Explorer built:", newData);
    setExplorerData(newData);
  }, [object?.files?.length]); // Re-run when file count changes

  console.log("MainExplorer render - explorerData:", explorerData);

  return (
    <div 

      className="min-h-screen bg-black  p-4"
    >
      {explorerData ? (
        <>
          <div className="text-sm text-gray-400 mb-2">
            Files: {object?.files?.length || 0}
          </div>
          <Folder explorer={explorerData} />
          {/* <Folder explorer={explorer} /> */}
        </>
      ) : (
        <div className="text-neutral-400 text-center py-64">
          {object?.files?.length === 0
            ? "Waiting for files..."
            : "No files generated yet..."}
        </div>
      )}
    </div>
  );
}
