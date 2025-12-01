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

export default function AlertDeleteProject({id}: {id: string}) {
  async function handleDeleteProject() {
    console.log("delete project");
    
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
          <AlertDialogAction onClick={handleDeleteProject} >Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
