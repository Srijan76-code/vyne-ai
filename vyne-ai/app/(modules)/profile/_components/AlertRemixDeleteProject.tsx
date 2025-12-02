import { CircleAlertIcon, PencilIcon, Trash2Icon } from "lucide-react";

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
import { toast } from "sonner";

export default function AlertRemixDeleteProject({id,userId}: {id: string, userId: number}) {

  async function handleDeleteProject() {

    const res = await fetch( `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/projects/clone?userId=${userId}&projectId=${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data: { success: boolean } = await res.json();
    if (data.success) {
      toast.success("Project deleted successfully");
      console.log("remix project deleted successfully");
    }else{
      toast.error("Project deletion failed");
    }

  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="text-muted-foreground  hover:text-red-500 cursor-pointer"
                  size="icon-sm"
                  variant="outline"
                >
                  <Trash2Icon className="w-4 h-4" />
                </Button>
              </TooltipTrigger>

              <TooltipContent className="dark px-2 py-1 text-xs">
                Delete Project
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
          <div
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border"
          >
            <CircleAlertIcon className="opacity-80" size={16} />
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete your project?
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={ handleDeleteProject} >Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
