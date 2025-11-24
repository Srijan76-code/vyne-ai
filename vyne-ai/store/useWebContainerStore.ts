import { create } from "zustand";
import type { WebContainer } from "@webcontainer/api";

interface WebContainerStore {
  webContainer: WebContainer | null;
  setWebContainer: (wc: WebContainer) => void;
  clearWebContainer: () => void;
}

export const useWebContainerStore = create<WebContainerStore>((set) => ({
  webContainer: null,
  setWebContainer: (wc) => set({ webContainer: wc }),
  clearWebContainer: () => set({ webContainer: null }),
}));



