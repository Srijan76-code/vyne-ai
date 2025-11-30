import React from "react";
import ProjectCard from "./_components/ProjectCard";
import { communityProjects } from "@/data/communityProjects";
import Filter from "./_components/Filter";
import { FilterIcon } from "lucide-react";
import SearchProject from "./_components/SearchProject";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import FilterCommunity from "./_components/FilterCommunity";

const page = () => {
  return (
    <div className="w-full scrollbar-none  bg-black ">
      <div className="max-w-7xl pb-24   space-y-4 px-8  mx-auto">

        {/* Tag line */}
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="w-48 ">
            <img src="/community/community.png" alt="AI" />
          </div>

          <div className="text-center max-w-xl mx-auto">
            <p className="text-xl   ">
              The platform to create, remix and
            </p>
            <p className="text-xl   ">
              share websites{" "} 
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                #MadeInVyne
              </span>
            </p>
          </div>
        </div>
        <FilterCommunity/>


      </div>
    </div>
  );
};

export default page;
