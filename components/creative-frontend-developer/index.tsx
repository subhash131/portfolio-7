"use client";
import { manrope } from "@/fonts";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

const CreativeFrontendDeveloper = () => {
  const containerRef = useRef(null);
  const leftVariants = {
    initial: {
      marginLeft: 0,
    },
    final: {
      marginLeft: 100,
    },
  };
  const rightVariants = {
    initial: {
      marginLeft: 0,
    },
    final: {
      marginLeft: 100,
    },
  };
  return (
    <div className="w-screen h-[70vh] py-10" ref={containerRef}>
      <div className="h-28 px-20 ">
        <p className="w-72 text-xs text-neutral-400">
          I&apos;ve worked with the Fortune 500 brands, specializing in
          implementing the solutions for large-scale applications. This
          experience has provided me with a deep understanding of design and the
          skill to facilitate effective communication within teams.
        </p>
      </div>
      <div
        className={`h-72 w-full ${manrope.className} text-8xl relative flex flex-col items-center  `}
      >
        <motion.div
          className="w-fit ml-0 "
          style={{ x: "-150%" }}
          whileInView={{ x: "-50%" }}
          //   variants={leftVariants}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="italic">Creative</p>
        </motion.div>
        <div className="m-auto">
          <p className="italic text-neutral-300">Frontend</p>
        </div>
        <motion.div
          variants={rightVariants}
          className="mr-0 w-fit"
          style={{ x: "120%" }}
          whileInView={{ x: "50%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="italic">Developer</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CreativeFrontendDeveloper;
