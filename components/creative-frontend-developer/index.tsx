"use client";
import { useScroll } from "framer-motion";
import React from "react";

const CreativeFrontendDeveloper = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-screen h-screen px-20">
      <div className="h-28 ">
        <p className="w-72 text-xs text-neutral-400">
          I&apos;ve worked with the Fortune 500 brands, specializing in
          implementing the solutions for large-scale applications. This
          experience has provided me with a deep understanding of design and the
          skill to facilitate effective communication within teams.
        </p>
      </div>
      <div className="h-96 w-full ">
        <div>
          <p>creative</p>
        </div>
        <div>
          <p>frontend</p>
        </div>
        <div>
          <p>developer</p>
        </div>
      </div>
    </div>
  );
};

export default CreativeFrontendDeveloper;
