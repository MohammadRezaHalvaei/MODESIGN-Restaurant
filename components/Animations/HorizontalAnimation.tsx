"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

export default function HorizontalAnimation({
  children,
  delay = 0.5,
  className,
  xAxis = 100,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  xAxis?: number;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial={{ x: xAxis, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
