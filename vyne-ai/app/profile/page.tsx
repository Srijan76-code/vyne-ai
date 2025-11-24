import React from "react";
import UserCard from "./_components/UserProfile/UserCard";
import UserActivity from "./_components/UserProfile/UserActivity";

const page = () => {
  return (
<div className="min-h-screen w-full bg-black relative overflow-hidden">
 {/* Top Spotlight Background */}
 <div
   className="absolute inset-0 z-0 pointer-events-none"
   style={{
     background: `
       radial-gradient(
         circle at top,
         rgba(255, 255, 255, 0.08) 0%,
         rgba(255, 255, 255, 0.08) 20%,
         rgba(0, 0, 0, 0.0) 60%
       )
     `,
   }}
 />
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center gap-4">
        {/* USER + ACTIVITY */}
        <div className="flex gap-4  items-center">
          <div>
            <UserCard />
          </div>
          <div>
            <UserActivity />
          </div>
        </div>

        {/* PROJECTS */}
        <div></div>
      </div>
    </div>
  );
};

export default page;

