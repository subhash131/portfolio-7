"use client";
import { manrope } from "@/fonts";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Reveal from "../animate/reveal";

const CreativeFrontendDeveloper = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: false });
  const mainControls = useAnimation();

  const leftVariants = {
    initial: {
      x: "-300%",
    },
    final: {
      x: "-40%",
    },
  };
  const rightVariants = {
    initial: {
      x: "200%",
    },
    final: {
      x: "40%",
    },
  };
  useEffect(() => {
    if (inView) mainControls.start("final");
    else mainControls.start("initial");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="w-screen h-[70vh] py-10 max-sm:h-fit" ref={containerRef}>
      <div className="h-28 px-20 ">
        <Reveal className="w-fit max-sm:hidden max-lg:hidden">
          <p className="w-72 text-xs text-neutral-400 ">
            I&apos;ve worked with the Fortune 500 brands, specializing in
            implementing the solutions for large-scale applications. This
            experience has provided me with a deep understanding of design and
            the skill to facilitate effective communication within teams.
          </p>
        </Reveal>
      </div>
      <div
        className={`h-72 w-full ${manrope.className} text-8xl relative flex flex-col items-center max-sm:text-4xl max-sm:h-fit max-lg:text-7xl `}
      >
        <motion.div
          variants={leftVariants}
          animate={mainControls}
          initial="initial"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="italic">Creative</p>
        </motion.div>
        <div className="m-auto">
          <p className="italic text-neutral-300">Frontend</p>
        </div>
        <motion.div
          variants={rightVariants}
          animate={mainControls}
          initial="initial"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="italic">Developer</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CreativeFrontendDeveloper;
