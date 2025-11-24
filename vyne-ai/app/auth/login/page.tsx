import React from "react";

import LoginComp from "./_components/LoginComp";

const page = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.1), transparent 70%), #000000",
      }}
    >
      <LoginComp />
    </div>
  );
};

export default page;
