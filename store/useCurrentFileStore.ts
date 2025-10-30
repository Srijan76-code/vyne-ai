import { create } from "zustand";

interface ExplorerItem {
  currentFile: object | null;
  setCurrentFile: (currentFile: object) => void;
}

export const useCurrentFileStore = create<ExplorerItem>((set) => ({
  currentFile: null,
  setCurrentFile: (currentFile) => set({ currentFile }),
}));
