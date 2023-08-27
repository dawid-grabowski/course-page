"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export function FAQWrapper({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      viewport={{ once: true }}
      className='bg-neutral-900'
      id='faq'
    >
      {children}
    </motion.div>
  );
}
