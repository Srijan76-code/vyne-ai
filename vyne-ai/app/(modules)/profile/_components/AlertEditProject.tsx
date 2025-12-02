"use client";
import { CircleAlertIcon, PencilIcon } from "lucide-react";

import { CheckIcon, ImagePlusIcon, XIcon } from "lucide-react";
import { useId, useState } from "react";

import { useCharacterLimit } from "@/hooks/use-character-limit";
import { useFileUpload } from "@/hooks/use-file-upload";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Separator } from "@/components/ui/separator";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AlertEditProject({
  id,
  name,
  setName,
}: {
  id: string;
  name: string;
  setName: (name: string) => void;
}) {
  const [projectName, setProjectName] = useState(name);

  async function editProject(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/projects`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title: projectName }),
      credentials: "include",
    });

    const data: { success: boolean } = await res.json();
    if (data.success) {
      console.log("project edited successfully");
      setName(projectName)
    }

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="text-muted-foreground hover:text-primary cursor-pointer"
                  size="icon-sm"
                  variant="outline"
                >
                  <PencilIcon className="w-4 h-4" />
                </Button>
              </TooltipTrigger>

              <TooltipContent className="dark px-2 py-1 text-xs">
                Edit Project name
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 overflow-y-visible p-0 sm:max-w-sm [&>button:last-child]:top-3.5">
        <DialogHeader className="contents space-y-0 text-left">
          <DialogTitle className="border-b px-6 py-4 text-base">
            Edit Project name
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={editProject} className="space-y-4  ">
          <div className="overflow-y-auto">
            <div className="px-6 pt-4 pb-6">
              <Label className="mb-2" htmlFor={`first-name`}>
                Project Name
              </Label>
              <Input
                id={`first-name`}
                placeholder="Project Name"
                required
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter className="border-t px-6 py-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
