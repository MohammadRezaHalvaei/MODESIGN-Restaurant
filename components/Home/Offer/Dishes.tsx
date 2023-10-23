"use client";

import DishesItem from "./DishesItem";
import { motion } from "framer-motion";

import dishOne from "@/public/home/offer/dishes/1.png";
import dishTwo from "@/public/home/offer/dishes/2.png";
import dishThree from "@/public/home/offer/dishes/3.png";
import dishFour from "@/public/home/offer/dishes/4.png";
import Link from "next/link";

const sources = [dishOne, dishTwo, dishThree, dishFour];

export default function Dishes() {
  return (
    <>
      <div
        className="grid grid-cols-4 gap-8 px-10 max-md:gap-y-10 max-md:px-2
        max-xl:grid-cols-2 max-xl:gap-x-16 max-md:grid-cols-1 max-md:w-full"
      >
        {sources.map((src, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            viewport={{ once: true }}
            className="px-10"
          >
            <DishesItem src={src} />
          </motion.div>
        ))}
      </div>
      <Link href="/menu">
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="btn-white text-[#E1B168] font-medium text-[22px] px-12 py-5"
        >
          See all dishes
        </motion.button>
      </Link>
    </>
  );
}
