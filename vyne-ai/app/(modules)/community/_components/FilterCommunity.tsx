"use client";
import { FilterIcon, Loader } from "lucide-react";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import SearchProject from "./SearchProject";
import { Separator } from "@/components/ui/separator";

import { Spinner } from "@/components/ui/spinner";
import { PaginationComp } from "./PaginationComp";
import ProjectCard from "./ProjectCard";

interface CommunityProject {
  id: string;
  title: string;
  createdAt: string;
  Likes: number;
  Clones: number;
  user?: {
    image: string | null;
  };
}
const FilterCommunity = () => {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("Likes");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(9);
  const [totalPages, setTotalPages] = useState(1);
  const [communityProjects, setCommunityProjects] = useState<
    CommunityProject[]
  >([]);

  function localDate(date: string) {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    let active = true;
    setLoading(true);

    const fetchProjects = async () => {
      const response = await fetch(
        `/api/projects?filter=${filter}&page=${page}&limit=${limit}&search=${debouncedSearch}`
      );

      const data = await response.json();
      if (!active) return;

      setTotalPages(data.totalPages);
      setCommunityProjects(data.projects);
      setLoading(false);
    };

    fetchProjects();

    return () => {
      active = false;
    };
  }, [filter, page, debouncedSearch]);

  return (
    <div>
      {/* Filters */}
      <div className="flex bg-black items-center justify-between gap-2">
        <div className="text-neutral-400 font-light flex items-center gap-2">
          <FilterIcon className="w-4 h-4" />
          <p>Filter:</p>
          <Filter setFilter={setFilter} filter={filter} />
        </div>

        <SearchProject search={search} setSearch={setSearch} />
      </div>

      <Separator className="mb-8 mt-8" />

      {/* Community Projects */}
      <p className="pb-4">Community Projects</p>
      <div className="flex bg-black items-center  flex-wrap gap-8">
        {loading ? (
          <div className="pt-16 w-full flex justify-center items-center ">
            <Spinner variant="ring" size={32} />
          </div>
        ) : ( (!communityProjects || communityProjects.length == 0) ? (
          <div className="flex w-full flex-col items-center  gap-8 justify-center">
            <div className="w-64 ">
              <img src="/community/community.png" alt="AI" />
            </div>

            <p className="text-muted-foreground">No community projects found</p>
          </div>
        ) : ( 
          communityProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title} 
              createdAt={localDate(project.createdAt)}
              Likes={project.Likes}
              Clones={project.Clones}
              user={project.user}
            />
          ))
        ))}
      </div>

      <Separator className="mb-12 mt-12" />
      <PaginationComp totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
};

export default FilterCommunity;
