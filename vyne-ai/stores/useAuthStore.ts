"use client";
import { create } from "zustand";

interface UserPayload {
  id: number;
  email: string;
  role?: string;
  iat?: number;
  exp?: number;
}

interface AuthState {
  user: UserPayload | null;
  isLoggedIn: boolean;
  loading: boolean;

  setUser: (payload: UserPayload) => void;
  clearUser: () => void;
  setLoading: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,
  loading: true,

  setUser: (payload) =>
    set({
      user: payload,
      isLoggedIn: true,
      loading: false,
    }),

  clearUser: () =>
    set({
      user: null,
      isLoggedIn: false,
      loading: false,
    }),

  setLoading: (value) => set({ loading: value }),
}));
