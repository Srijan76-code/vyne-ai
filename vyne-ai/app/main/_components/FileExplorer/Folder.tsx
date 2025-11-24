import { useCurrentFileStore } from "@/store/useCurrentFileStore";
import { ChevronRight, File, FileCheck2, FolderClosed, FolderOpen } from "lucide-react";
import { useState } from "react";

interface ExplorerItem {
  id: string;
  name: string;
  isFolder: boolean;
  items?: ExplorerItem[];
  contents?: string;
}

interface FolderProps {
  handleInsertNode?: (id: string, name: string, isFolder: boolean) => void;
  explorer: ExplorerItem;
}

function Folder({ handleInsertNode = () => {}, explorer }: FolderProps) {
  const { currentFile, setCurrentFile } = useCurrentFileStore();
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (
    e: React.MouseEvent<HTMLButtonElement>,
    isFolder: boolean
  ) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value) {
      handleInsertNode(explorer.id, e.currentTarget.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div className="mt-1">
        <div
          onClick={() => setExpand(!expand)}
          className="folder flex items-center justify-between px-3 py-[2px] hover:bg-[#252525] hover:rounded-md  rounded cursor-pointer"
        >
          <span
            onClick={() => setExpand(!expand)}
            className="flex items-center gap-2 text-gray-200 cursor-pointer select-none hover:text-white/90 transition-colors duration-150"
          >
            <ChevronRight
              className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                expand ? "rotate-90" : ""
              }`}
            />
            {expand ? (
              <FolderOpen className="w-4 text-gray-400" />
            ) : (
              <FolderClosed className="w-4 text-gray-400" />
            )}
            <span className="text-sm  ">
              {explorer.name}
            </span>
          </span>

          {/* Adding file and folder */}
{/* 
          <div className="flex gap-2">
            <button
              onClick={(e) => handleNewFolder(e, true)}
              className="text-xs px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded transition"
            >
              + Folder
            </button>
            <button
              onClick={(e) => handleNewFolder(e, false)}
              className="text-xs px-2 py-1 bg-green-600 hover:bg-green-700 rounded transition"
            >
              + File
            </button>
          </div> */}
        </div>

        <div
          className="pl-6 transition-all"
          style={{ display: expand ? "block" : "none" }}
        >
          {showInput.visible && (
            <div className="flex items-center gap-2 p-2 bg-gray-800 rounded my-1">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="flex-1 bg-gray-700 text-white px-2 py-1 rounded outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                placeholder={
                  showInput.isFolder ? "Folder name..." : "File name..."
                }
              />
            </div>
          )}

          {explorer.items?.map((exp) => (
            <Folder
              handleInsertNode={handleInsertNode}
              key={exp.id}
              explorer={exp}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          setCurrentFile(explorer);
          console.log("Current file set to:", explorer);
        }}
        className="file  px-3 py-[2px] hover:bg-[#252525]  hover:rounded-md  rounded cursor-pointer text-gray-300"
      >
        <div className="flex  text-sm items-center gap-2">
          <FileCheck2 className="w-4 text-gray-400" /> {explorer.name}
        </div>
      </div>
    );
  }
}

export default Folder;
