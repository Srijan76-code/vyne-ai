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

  setUser: (payload: UserPayload) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoggedIn: false,

  setUser: (payload) =>
    set({
      user: payload,
      isLoggedIn: true,
    }),

  clearUser: () =>
    set({
      user: null,
      isLoggedIn: false,
    }),
}));
