import { poppins } from "@/fonts";
import React from "react";

const Hero = () => {
  return (
    <main
      className={`relative flex flex-col h-screen w-full z-10 items-center justify-center ${poppins.className}`}
    >
      <div className="w-full flex justify-center text-center">
        <h1 className="text-6xl w-[70%] font-semibold">
          I&apos;m Subhash Creative Frontend Developer.
        </h1>
      </div>
    </main>
  );
};

export default Hero;
