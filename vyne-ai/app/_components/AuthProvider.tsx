"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { usePathname } from "next/navigation";

export default function AuthProvider() {
  const setUser = useAuthStore((s) => s.setUser);
  const clearUser = useAuthStore((s) => s.clearUser);
  const setLoading = useAuthStore((s) => s.setLoading);
  const pathname = usePathname();


  const PUBLIC_ROUTES = ["/", "/auth/login", "/auth/signup"];

  const isPublic = PUBLIC_ROUTES.includes(pathname);

  useEffect(() => {
    if (isPublic) {
      setLoading(false);
      return;
    }

    async function loadUser() {
      setLoading(true);

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
          { credentials: "include" }
        );
        const data = await res.json();

        if (data.user) setUser(data.user);
        else clearUser();
      } catch {
        clearUser();
      }
    }

    loadUser();
  }, [pathname, isPublic, setUser, clearUser, setLoading]);

  return null;
}
