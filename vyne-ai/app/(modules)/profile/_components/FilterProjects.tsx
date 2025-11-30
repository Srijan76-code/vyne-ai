"use client";
import { FilterIcon, Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import ProjectCard from "../../community/_components/ProjectCard";

import { useAuthStore } from "@/stores/useAuthStore";
import Filter2 from "./Filter2";
import SearchProject2 from "./SearchProject2";
import { PaginationComp2 } from "./PaginationComp2";

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
const FilterProjects = () => {
  const {user} = useAuthStore();

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
    if (!user?.id) return;
    let active = true;
    setLoading(true);

    const fetchProjects = async () => {
      const response = await fetch(
        `/api/user/projects?userId=${user.id}&filter=${filter}&page=${page}&limit=${limit}&search=${debouncedSearch}`
      );

      const data = await response.json();
      if (!active) return;

      console.log(data);

      setTotalPages(data.totalPages);
      setCommunityProjects(data.projects);
      setLoading(false);
    };

    fetchProjects();

    return () => {
      active = false;
    };
  }, [filter, page, debouncedSearch,user?.id]);


  if (!user) {
  return (
    <div className="flex justify-center items-center h-64">
      <Spinner variant="ring" size={32} />
    </div>
  );
}

  return (
    <div>
      {/* Filters */}
      <div className="flex bg-black items-center justify-between gap-2">
        <div className="text-neutral-400 font-light flex items-center gap-2">
          <FilterIcon className="w-4 h-4" />
          <p>Filter:</p>
          <Filter2 setFilter={setFilter} filter={filter} />
        </div>

        <SearchProject2 search={search} setSearch={setSearch} />
      </div>

      <Separator className="mb-8 mt-8" />

      {/* Community Projects */}
      <p className="pb-4">Projects</p>
      <div className="flex bg-black  items-center  flex-wrap gap-8">
        {loading ? (
          <div className="pt-16 flex w-full justify-center items-center ">
            <Spinner variant="ring" size={32} />
          </div>
        ) : (
          communityProjects.map((project) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              title={project.title}
              createdAt={localDate(project.createdAt)}
              Likes={project.Likes}
              Clones={project.Clones}
              user={project.user}
            />
          ))
        )}
      </div>

      <Separator className="mb-12 mt-12" />
      <PaginationComp2 totalPages={totalPages} page={page} setPage={setPage} />
    </div>
  );
};

export default FilterProjects;
