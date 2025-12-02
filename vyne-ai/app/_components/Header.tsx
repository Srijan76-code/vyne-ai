"use client"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CirclePlus, LogOut, User, Users, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HoverButton } from "@/components/Buttons/HoverButton";
import AlertLogout from "./AlertLogout";

const Header = () => {
  return (
    <div className="pb-16">
      <div className="flex  justify-between border-b    items-center p-4  w-full">
        {/* logo */}
        <div>
          <Image src="/vercel.svg" alt="logo" width={16} height={16} />
        </div>

        <div className="flex  gap-5">
          <Link href="/main">
            <HoverButton >
              <div className="flex gap-2 items-center">
                <CirclePlus className="w-4 h-4" />
                <p>New project</p>
              </div>
            </HoverButton>
          </Link>

          <Link href="/community">
            <HoverButton>
              <div className="flex gap-2 items-center">
                <Users className="w-4 h-4" />
                <p>Community</p>
              </div>
            </HoverButton>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>

            <div className="flex justify-center border border-neutral-900 items-center rounded-full bg-neutral-700 w-8 h-8 cursor-pointer">
              <img
                className="w-full h-full  object-cover rounded-full"
                src="/userProfile/new2.png"
                alt="User Image"

              />
            </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full bg-black" align="start">
              <DropdownMenuItem>
                <Link href="/profile">
                  <div className="flex gap-2 items-center">
                    <User className="w-4 h-4" />
                    <p>Profile</p>
                  </div>
                </Link>
              </DropdownMenuItem>

              <AlertLogout />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>




      </div>
    </div>
  );
};

export default Header;

