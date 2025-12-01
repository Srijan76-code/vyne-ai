"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { WorkBadge } from "./WorkBadge";
import StaggerFadeRise from "./animations/StaggerFadeRise";
import { staggerItemVariants } from "./animations/variants";

export default function Working() {
  return (
    <StaggerFadeRise>
      <motion.div variants={staggerItemVariants}>
        <WorkBadge>Steps</WorkBadge>
      </motion.div>

      <motion.div variants={staggerItemVariants}>
        <div className="mb-20 font-raleway flex flex-col items-center text-center justify-center gap-3 tracking-tight leading-none">
          <p className="text-neutral-200 text-5xl font-medium">
            From Idea to {" "}
            <span className="font-instrument-serif italic text-blue-500">
              Reality
            </span>
          </p>
          <p className="text-muted-foreground">
            Turn your raw idea into a fully built project in minutes—describe it, refine it, and launch it with zero friction.
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="py-20 mb-20 flex flex-col lg:flex-row items-center justify-center max-w-6xl gap-4 mx-auto px-8">
        <motion.div variants={staggerItemVariants}>
          <Card
            para="Tell VYNE-AI what you want"
            title="Enter your idea"
            icon={<img src="/working/a4.png" />}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
              dotSize={2}
            />
          </Card>
        </motion.div>
        <motion.div variants={staggerItemVariants}>
          <Card
            para="Watch it shape your idea into reality."
            title="Generate website"
            icon={<img src="/working/a2.png" />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
        </motion.div>
        <motion.div variants={staggerItemVariants}>
          <Card
            para="Take it live when you’re ready."
            title="Deploy"
            icon={<img src="/working/a3.png" />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
              dotSize={2}
            />
          </Card>
        </motion.div>
      </div>
    </StaggerFadeRise>
  );
}

const Card = ({ title, icon, para, children }: any) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute  inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center pt-25 ">
          {icon}
        </div>
        <h2 className="dark:text-white  text-center text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-55 transition duration-250">
          {title}
        </h2>
        <p className="dark:text-white  text-center font-light opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4   group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-55 transition duration-250">
          {para}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
