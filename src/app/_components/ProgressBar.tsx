"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ReactElement } from "react";

export function ProgressBar(): ReactElement {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className='fixed top-0 left-0 right-0 h-1 origin-[0%] bg-indigo-700 z-50'
      style={{ scaleX }}
    />
  );
}
