"use client";
import UserEditProfile from "@/app/(modules)/profile/_components/UserProfile/UserEditProfile";
import { useAuthStore } from "@/stores/useAuthStore";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  CopyIcon,
  ExternalLinkIcon,
  Link,
  LinkIcon,
  MoreHorizontalIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import Image from "next/image";
import { ButtonGroup } from "../ui/button-group";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
export default function DotCard() {
  const { user } = useAuthStore();
  return (
    <div className="relative mx-auto w-full max-w-sm rounded-lg border border-dashed border-zinc-300 px-4 sm:px-6 md:px-8 dark:border-zinc-800">
      <div className="absolute top-4 left-0 -z-0 h-px w-full bg-zinc-400 sm:top-6 md:top-8 dark:bg-zinc-700" />
      <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 sm:bottom-6 md:bottom-8 dark:bg-zinc-700" />
      <div className="relative w-full border-x border-zinc-400 dark:border-zinc-700">
        <div className="absolute z-0 grid h-full w-full items-center">
          <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
            <div className="bg-primary my-4 size-1 -translate-x-[2.5px] rounded-full outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950" />
            <div className="bg-primary my-4 size-1 translate-x-[2.5px] place-self-end rounded-full outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950" />
            <div className="bg-primary my-4 size-1 -translate-x-[2.5px] rounded-full outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950" />
            <div className="bg-primary my-4 size-1 translate-x-[2.5px] place-self-end rounded-full outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950" />
          </section>
        </div>
        <div className="relative z-20 mx-auto py-8">
          {/* <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="flex p-5 px-8  gap-4 items-center">
                <div className="flex justify-center border border-neutral-900 items-center rounded-full bg-neutral-700 w-12 h-12">
                  <img
                    className="w-full h-full  object-cover rounded-full"
                    src="/userProfile/new2.png"
                    alt="User Image"
                  />
                </div>

                <div className="text-sm">
                  <div>
                    <p>Srijan Patel</p>
                    <p className="text-muted-foreground">@srijan</p>
                  </div>
                </div>
              </div>

              <a href="">
                <div className="flex items-center gap-1">
                  <svg
                    data-testid="geist-icon"
                    height="16"
                    strokeLinejoin="round"
                    viewBox="0 0 16 16"
                    width="16"
                    style={{ color: "currentcolor" }}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.60022 2H5.80022L8.78759 6.16842L12.4002 2H14.0002L9.5118 7.17895L14.4002 14H10.2002L7.21285 9.83158L3.60022 14H2.00022L6.48864 8.82105L1.60022 2ZM10.8166 12.8L3.93657 3.2H5.18387L12.0639 12.8H10.8166Z"
                      fill="#71717A"
                    ></path>
                  </svg>
                  <p>@ececefcecef</p>
                </div>
              </a>
            </div>

            <div className="flex flex-col flex-wrap">
              <p>Bio</p>
              <div className="text-sm">fullstack developer</div>
            </div>
          </div> */}

          <div className="space-y-4 flex flex-col p-4">
            <div className=" opacity-90 flex w-full h-16 object-cover items-center overflow-hidden justify-center ">
              <img src="/userProfile/new2.png" alt="" />
            </div>

            <div className="flex justify-between p-2 items-center gap-2 ">
              <div className="flex items-center  gap-2 text-sm">
                <div className="flex justify-center border border-neutral-900 items-center rounded-full bg-neutral-700 w-10 h-10 ">
                  <img
                    className="w-full h-full   object-cover rounded-full"
                    src="/userProfile/new2.png"
                    alt="User Image"
                  />
                </div>

                <div>
                  <p>Srijan Patel</p>
                  <p className="text-muted-foreground "> @srijan</p>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="hover:text-primary">
                        <ExternalLinkIcon className="w-4 h-4  text-muted-foreground hover:text-primary" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="dark px-2 py-1 text-xs">
                      Website
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <p className="text-muted-foreground">|</p>

                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="">
                        <Link className="w-4 h-4 text-muted-foreground hover:text-primary" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent className="dark px-2 py-1 text-xs">
                      Twitter/X
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <p className="text-muted-foreground">|</p>
                <UserEditProfile />
              </div>
            </div>

            <div className="text-sm p-2  ">
              <p>
                A Full-Stack developer motivated by the limitless power of
                programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
