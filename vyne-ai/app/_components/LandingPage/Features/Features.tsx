"use client";
import { StickyCard002 } from "@/components/ui/skiper-ui/skiper17";
import React from "react";
import { WorkBadge } from "../../WorkBadge";

import { motion } from "framer-motion";
import { staggerItemVariants } from "../../animations/variants";
import StaggerFadeRise from "../../animations/StaggerFadeRise";
const Features = () => {
  const cards = [
    {
      id: 1,
      src: "/working/a2.png",

      alt: "Description 1",
    },
    {
      id: 2,
      src: "/features/f2.png",
      alt: "Description 2",
    },
    {
      id: 3,
      src: "/features/f1.png",
      alt: "Description 3",
    },
    {
      id: 4,
      src: "/features/f5.png",
      alt: "Description 4",
    },
    // Add more cards as needed
  ];
  return (
    <StaggerFadeRise>
      <div className="h-screen  w-full">
        {/* <p>features</p> */}
        <motion.div variants={staggerItemVariants}>
          <WorkBadge>Community Projects</WorkBadge>
        </motion.div>

        <motion.div variants={staggerItemVariants}>
          <div className="mb-20 font-raleway flex flex-col items-center text-center justify-center gap-3 tracking-tight leading-none">
            <p className="text-neutral-200 text-5xl font-medium">
              A Sneak{" "}
              <span className="font-instrument-serif italic text-blue-500">
                Peek
              </span>
            </p>
            <p className="text-muted-foreground">
              Get a glimpse into the community’s best work and remix any project
              instantly to kick-start your next idea.
            </p>
          </div>
        </motion.div>

        <StickyCard002 cards={cards} />
      </div>
    </StaggerFadeRise>
  );
};

export default Features;
