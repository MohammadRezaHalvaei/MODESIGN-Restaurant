"use client";

import GalleryItems from "./GalleryItems";
import italian from "@/public/gallery/single/italian.jpg";
import stuffed from "@/public/gallery/single/stuffed.jpg";
import tubular from "@/public/gallery/single/tubular.jpg";
import { motion } from "framer-motion";

const items = [
  { src: italian, title: "Italian Pasta" },
  { src: stuffed, title: "Stuffed Pasta" },
  { src: tubular, title: "Tubular Pasta" },
];

export default function Gallery() {
  return (
    <section className="max-w-[1378px] mx-auto py-[200px] flex flex-col gap-[100px]">
      {items.map((item, index) => (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          key={item.title}
        >
          <GalleryItems src={item.src} title={item.title} />
        </motion.div>
      ))}
    </section>
  );
}
