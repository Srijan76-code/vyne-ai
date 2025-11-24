import { Response } from "@/components/ai-elements/response";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
type AiFile = {
  path: string;
  contents: string;
};

interface ChatBoxProps {
  object: { files: AiFile[]; summary?: string } | undefined;
}

const Summary = ({ object }: ChatBoxProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button
        className="cursor-pointer text-neutral-300 text-sm transition"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <div>Summary </div>
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
              className="ml-4 text-sm"
            >
              <div>
                {object && object.summary && (
                  <div className="mt-2">
                    {/* <h2 className="text-xl font-bold mb-2">Project Summary</h2> */}
                    <div className=" text-sm  text-white whitespace-pre-wrap">
                      <Response>{object.summary}</Response>
                    </div>
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

export default Summary;
