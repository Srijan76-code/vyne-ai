"use client";
import LaserFlow from "@/components/LaserFlow";
import React, { useRef } from "react";

const HeroBg = () => {
  const revealImgRef = useRef(null);

  return (
    <div
      className="relative h-screen overflow-hidden bg-[#060010]"
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
      <div className="h-3/4 opacity-85">
        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          color="#cf9eff"
          horizontalSizing={1.06}
          verticalSizing={2.0}
        />
      </div>

      <div className="absolute top-3/4 left-1/2 translate-x-[-50%] w-[86%] h-[60%] bg-[#060010] rounded-[20px] border-2 border-neutral-700 flex items-center justify-center text-white text-[2rem] z-[6]">
        {/* Your content here */}
      </div>

      <img
        ref={revealImgRef}
        src="/hero_bg.png"
        alt="Reveal effect"
        className="absolute w-full top-3/4 z-[5] opacity-30 pointer-events-none"
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
