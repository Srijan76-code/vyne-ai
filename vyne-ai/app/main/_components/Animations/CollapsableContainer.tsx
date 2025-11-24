import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CollapsableContainer({children}: {children: React.ReactNode}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button  className="cursor-pointer text-neutral-300 text-sm transition"  onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-2">
            <div>Generated Files </div>
         {open ? <ChevronDown className="w-4" /> : <ChevronRight className="w-4" />}
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
             {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
