"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useState } from "react";

const LogoutButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      router.push("/auth/login");
    } else {
      console.error("Logout failed");
    }
  }

  return (
    <Button
    size="sm"
      onClick={handleLogout}
      disabled={loading}
      variant="outline"
      className="flex text-sm border-neutral-950 items-center gap-2"
    >
      <LogOut className="w-2 h-2" />
      {loading ? "Logging out..." : "Logout"}
    </Button>
  );
};

export default LogoutButton;
