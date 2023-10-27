"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

export default function VerticalAnimation({
  children,
  delay = 0.5,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: delay }}
      viewport={{ once: true }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
