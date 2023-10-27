"use client";

import { motion } from "framer-motion";

export default function OpacityAnimation({
  children,
  delay = 0.5,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
