"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) mainControls.start("visible");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <div className={`relative overflow-hidden ${className}`} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay ?? 0.25 }}
        className="w-full flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
