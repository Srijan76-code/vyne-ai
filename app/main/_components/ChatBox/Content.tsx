"use client";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiCss,
  SiHtml5,
  SiJson,
  SiMarkdown,
} from "@icons-pack/react-simple-icons";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { fa } from "zod/v4/locales";
type AiFile = {
  path: string;
  contents: string;
};

interface ChatBoxProps {
  object: { files: AiFile[]; summary: string } | undefined;
}
const Content = ({ object }: ChatBoxProps) => {
  const [open, setOpen] = useState(false);

  const getLanguageFromFileName = (fileName: string) => {
    const extension = fileName?.split(".").pop();
    switch (extension) {
      case "ts":
        return "typescript";
      case "tsx":
        return "react";
      case "js":
        return "javascript";
      case "jsx":
        return "react";
      case "json":
        return "json";
      case "html":
        return "html";
      case "css":
        return "css"; // Added CSS
      case "md":
        return "markdown"; // Added Markdown
      default:
        return "plaintext";
    }
  };

  function renderTaskItem(file: AiFile, index: number) {
    const iconInfo =
      iconMap[getLanguageFromFileName(file.path) as keyof typeof iconMap];
    if (iconInfo) {
      const IconComponent = iconInfo.component;
      return (
        <span className="inline-flex text-sm items-center gap-1" key={index}>
          <IconComponent color={iconInfo.color} className="size-4" />
          <span>{file.path}</span>
        </span>
      );
    }
  }
  const iconMap = {
    react: { component: SiReact, color: "#149ECA" },
    typescript: { component: SiTypescript, color: "#3178C6" },
    javascript: { component: SiJavascript, color: "#F7DF1E" },
    css: { component: SiCss, color: "#1572B6" },
    html: { component: SiHtml5, color: "#E34F26" },
    json: { component: SiJson, color: "#FFA000" },
    markdown: { component: SiMarkdown, color: "red" },
  };

  return (
    <div className="space-y-2">
      <button
        className="cursor-pointer text-neutral-300 text-sm transition"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <div>Generated Files ({object?.files?.length}) </div>
          {open ? (
            <ChevronDown className="w-4" />
          ) : (
            <ChevronRight className="w-4" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 18,
              mass: 0.8,
            }}
            className="overflow-hidden "
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 14,
                delay: 0.05,
              }}
              className=" text-sm"
            >
              <div className="p-4">
                {object && object.files && object.files.length > 0 && (
                  <div className="space-y-3 max-h-[600px] overflow-y-auto">
                    {object.files.map((file, index) => (
                      <div key={index}>{renderTaskItem(file, index)}</div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Content;
