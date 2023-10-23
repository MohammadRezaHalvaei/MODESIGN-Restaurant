"use client";

import Image from "next/image";
import StoryContent from "./StoryContent";
import { motion } from "framer-motion";

import storyPic from "@/public/home/Story.jpg";

export default function Story() {
  return (
    <section className="grid grid-cols-2 max-xl:grid-cols-1">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center max-xl:mb-20"
      >
        <Image
          src={storyPic}
          alt="story"
          className="h-full w-full max-xl:w-[80%]  xl:pr-14"
        />
      </motion.div>
      <StoryContent />
    </section>
  );
}
