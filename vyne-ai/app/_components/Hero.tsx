"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        src="/landingPage/loopbg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Hero Text */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full text-center">
        <h1
          className="font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white/0 via-white/30  to-white    whitespace-nowrap"
          style={{ fontSize: "120px", lineHeight: "1" }}
        >
          Build & Deploy Beautiful
        </h1>

        <h1
          className="font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white/0 via-white/30 to-white whitespace-nowrap"
          style={{ fontSize: "120px", lineHeight: "1" }}
        >
          Websites Faster
        </h1>
      </div>
    </div>
  );
};

export default Hero;
