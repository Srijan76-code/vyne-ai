import { Dot, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hamburger from "./Hamburger";

interface ProjectCardProps {
  id: string;
  title: string;
  createdAt: string;
  Likes: number;
  Clones: number;
  user?: {
    image: string | null;
  };
}

const ProjectCard = ({
  id,
  title,
  createdAt,
  Likes,
  Clones,
  user,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col  gap-2  ">
      <Link target="_blank" href={`/remix/${id}`}>
        <div
          className="w-96 h-60 rounded-md   border-neutral-000 border "
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
        </div>
      </Link>

      <div className="flex gap-4 items-center">

        <div className="text-sm">
          <p>{title}</p>
          <div className="flex items-center text-neutral-400  gap-1">
            <div className="flex items-center gap-1">
              <p>
                <Heart className="w-4 h-4" />
              </p>
              <p> {Likes}</p>
            </div>

            <div>
              <Dot className="w-4 h-4" />
            </div>

            <div className="flex items-center gap-1">
              <p>
                <Users className="w-4 h-4" />
              </p>
              <p> {Clones}</p>
            </div>

            {/* <div>
              <Dot className="w-4 h-4" />
            </div> */}

            {/* <div>{createdAt}</div> */}
          </div>
        </div>

        <div className="ml-auto ">
          <Hamburger />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
