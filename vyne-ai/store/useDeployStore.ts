import { create } from "zustand";

interface DeployStore {
  url: string | null;
  setUrl: (newUrl: string) => void;
  clearUrl: () => void;
}

export const useDeployStore = create<DeployStore>((set) => ({
  url: null,
  setUrl: (newUrl) => set({ url: newUrl }),
  clearUrl: () => set({ url: null }),
}));
