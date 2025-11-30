import React from "react";
import UserCard from "./_components/UserProfile/UserCard";
import UserActivity from "./_components/UserProfile/UserActivity";
import ProjectCard from "../community/_components/ProjectCard";
import { userData } from "@/data/userData";
import { Separator } from "@/components/ui/separator";
import { CirclePlus, FilterIcon } from "lucide-react";
import SearchProject from "../community/_components/SearchProject";
import Filter from "../community/_components/Filter";
import { Button } from "@/components/ui/button";
import FilterProjects from "./_components/FilterProjects";
import UserEditProfile from "./_components/UserProfile/UserEditProfile";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Top Spotlight Background */}
      {/* <div
   className="absolute inset-0 z-0 pointer-events-none"
   style={{
     background: `
       radial-gradient(
         circle at top,
         rgba(255, 255, 255, 0.08) 0%,
         rgba(255, 255, 255, 0.08) 20%,
         rgba(0, 0, 0, 0.0) 60%
       )
     `,
   }}
 /> */}
      <div className="max-w-7xl mx-auto gap-4">
        {/* USER + ACTIVITY */}
        <div className="flex px-8 mb-4 gap-4 w-full justify-between  items-center">
          <div>
            <UserCard />
          </div>
          <div>

          </div>
        </div>

        <Separator className="my-16"  />


         <FilterProjects />
      </div>
    </div>
  );
};

export default page;
