"use client";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
    };
    setWindowHeight(window.innerHeight);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  //Intercept normal scroll behavior

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 10,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, (latest) => {
    return latest * -(contentHeight - windowHeight);
  });

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        className="fixed top-0 w-screen flex flex-col"
        ref={contentRef}
        style={{ y }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
