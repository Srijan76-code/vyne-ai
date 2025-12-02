"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/useAuthStore";

export default function AuthProvider() {
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`, { credentials: "include" });
        const data = await res.json();


        if (data.user) {
          setUser(data.user);
        } else {
          clearUser();
        }
      } catch {
        clearUser();
      }
    }

    loadUser();
  }, [setUser, clearUser]);

  return null; 
}
