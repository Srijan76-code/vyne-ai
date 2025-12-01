"use client"
import { Dot, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Hamburger from "./Hamburger";

interface ProjectCardProps {
  remix?: boolean;
  id: string;
  title: string;
  createdAt: string;
  Likes: number;
  Clones: number;

}

const ProjectCard = ({
  remix,
  id,
  title,
  createdAt,
  Likes,
  Clones,
  
}: ProjectCardProps) => {
  const [name,setName] = useState(title);

  const [likes,setLikes] = useState(Likes);
  const [clones,setClones] = useState(Clones);

  console.log("data", name,clones,likes);
  return (
    <div className="flex flex-col  gap-2  ">
      <Link target="_blank" href={`/main/${id}`}>
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
          <p>{name}</p>
          <div className="flex items-center text-neutral-400  gap-1">
            <div className="flex items-center gap-1">
              <p>
                <Heart className="w-4 h-4" />
              </p>
              <p> {likes}</p>
            </div>

            <div>
              <Dot className="w-4 h-4" />
            </div>

            <div className="flex items-center gap-1">
              <p>
                <Users className="w-4 h-4" />
              </p>
              <p> {clones}</p>
            </div>

            {/* <div>
              <Dot className="w-4 h-4" />
            </div> */}

            {/* <div>{createdAt}</div> */}
          </div>
        </div>

        <div className="ml-auto ">
          <Hamburger remix={remix} setName={setName} id={id} name={name} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
