"use client";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { Dot, Heart, Loader, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
interface ProjectCardProps {
  id: string;
  title: string;
  createdAt: string;
  Likes: number;
  Clones: number;
  user?: {
    id: number;
    image: string | null;
  };
}

const ProjectCard = ({
  id,
  title,
  createdAt,
  Likes,
  Clones,
  user: owner,
}: ProjectCardProps) => {
  const [likes, setLikes] = useState(Likes);
  const [liked, setLiked] = useState(false);
  const { user: authUser } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [cloneLoading, setCloneLoading] = useState(false);

  const router = useRouter();

  async function changeLike() {
    setLoading(true);
    const res = await fetch("/api/projects/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectId: id, userId: authUser?.id }),
    });

    const data: { liked: boolean } = await res.json();

    if (data.liked) {
      setLiked(true);
      setLikes((x) => x + 1);
    } else {
      setLiked(false);
      setLikes((x) => Math.max(0, x - 1));
    }
    setLoading(false);
  }

  async function cloneProject() {
    setCloneLoading(true);
    const res = await fetch("/api/projects/clone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectId: id, userId: authUser?.id }),
    });

    const data: { success: boolean; alreadyCloned: boolean } = await res.json();

    if (data.success) {
      setCloneLoading(false);
      router.push(`/main/${id}`);
    }
  }

  if (cloneLoading) {
    return (
        <p className="flex w-full items-center justify-center">
          <Spinner variant="ring" size={32} />
        </p>
    );
  }

  return (

    <div className="flex flex-col  gap-2  ">

      <button
        disabled={cloneLoading}
        onClick={cloneProject}
        className="w-96 h-60 rounded-md cursor-pointer   border-neutral-000 border "
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
        }}
      >
        {/* <Image
          src="/placeholder.png"
          alt="Project Image"
          width={200}
          height={200}
        /> */}
      </button>

      <div className="flex gap-4 items-center">
        <div className="text-sm  w-full">
          <p className=""> {title}</p>

          <div className="flex items-center  text-neutral-400  gap-1">
            {loading ? (
              <p>
                <Spinner variant="ring" size={18} />
              </p>
            ) : (
              <button
                type="button"
                onClick={changeLike}
                disabled={loading}
                className="flex cursor-pointer items-center gap-1"
              >
                <p>
                  <Heart
                    className={`w-4 h-4 ${liked && "fill-muted-foreground  "}`}
                  />
                </p>
                <p> {likes}</p>
              </button>
            )}
            <div>
              <Dot className="w-4 h-4" />
            </div>

            <div className="flex items-center gap-1">
              <p>
                <Users className="w-4  h-4" />
              </p>
              <p> {Clones}</p>
            </div>

            <div>
              <Dot className="w-4 h-4" />
            </div>

            <div className="text-muted-foreground">{createdAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
