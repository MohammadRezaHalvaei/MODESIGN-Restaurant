"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import pancake from "@/public/about/gallery/1.png";
import drinks from "@/public/about/gallery/2.png";
import restaurantSpace from "@/public/about/gallery/3.jpg";
import chefs from "@/public/about/gallery/4.png";
import design from "@/public/about/gallery/5.png";

export default function Gallery() {
  return (
    <section className="flex flex-col py-[200px] items-center max-lg:py-[100px] px-10">
      <p
        className="font-josephin font-medium text-[15px] w-fit mb-4
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
      >
        GALLERY
      </p>

      <h4 className="h4-title mb-11">What We Make</h4>

      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-[1376px] grid grid-cols-[25%_50%_25%] gap-3.5 max-sm:grid-cols-1"
      >
        <div className="flex flex-col gap-3.5 ml-auto max-sm:ml-0">
          <Image
            src={pancake}
            alt="pancake"
            className="max-sm:w-full max-sm:h-full"
          />
          <Image
            src={drinks}
            alt="drinks"
            className="max-sm:w-full max-sm:h-full"
          />
        </div>
        <Image
          src={restaurantSpace}
          alt="Restaurant"
          className="h-full max-sm:w-full"
        />
        <div className="flex flex-col gap-3.5">
          <Image
            src={chefs}
            alt="pancake"
            className="max-sm:w-full max-sm:h-full"
          />
          <Image
            src={design}
            alt="drinks"
            className="max-sm:w-full max-sm:h-full"
          />
        </div>
      </motion.article>
    </section>
  );
}
