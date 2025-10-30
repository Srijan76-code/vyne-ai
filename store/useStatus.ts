import { create } from "zustand";

interface DeployStore {
  status: string 
  setStatus: (status: string) => void;

}

export const useStatus = create<DeployStore>((set) => ({
  status: "submitted",
  setStatus: (status) => set({ status: status }),

}));
