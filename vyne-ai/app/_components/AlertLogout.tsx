"use client";
import { CircleAlertIcon, LogOut, PencilIcon, Trash2Icon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AlertLogout() {
  const router = useRouter();

  async function handleLogout() {
   await fetch(`/api/auth/logout`, {
      method: "POST",
    });
    console.log("logout");
    router.push("/auth/login");
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex cursor-pointer   text-sm hover:text-red-500 ml-3 gap-2 items-center">
          <LogOut className="w-4 text-muted-foreground  h-4" />
          <p>Logout</p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
          {/* <div
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border"
          >
            <CircleAlertIcon className="opacity-80" size={16} />
          </div> */}
          <AlertDialogHeader>
            {/* <AlertDialogTitle>Are you sure?</AlertDialogTitle> */}
            <AlertDialogDescription>
              Are you sure you want to logout? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>Logout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
