"use client";
import LaserFlow from "@/components/LaserFlow";
import React, { useRef } from "react";
import { AiInputBox } from "../Chat/AiInputBox";

const HeroBg = () => {
  const revealImgRef = useRef(null);

  return (
    <div
      className="relative h-[135vh] overflow-hidden  bg-black"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", "-9999px");
          el.style.setProperty("--my", "-9999px");
        }
      }}
    >
      <div className="h-[104%] opacity-85">
        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          color="white"
          horizontalSizing={1.05}
          verticalSizing={2.0}
        />
      </div>

      <div
        className="absolute  top-1/2  left-1/2 -translate-x-1/2 w-[86%] h-[60%] 
          
         flex items-center justify-center z-6"
      >
        <img src="/main/image.png" alt="" />
      </div>

      <img
        ref={revealImgRef}
        src="/hero_bg.png"
        alt="Reveal effect"
        className="absolute w-full  z-[5] opacity-30 pointer-events-none"
        style={{
          mixBlendMode: "lighten",
          "--mx": "-9999px",
          "--my": "-9999px",
          WebkitMaskImage:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
          maskImage:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default HeroBg;
