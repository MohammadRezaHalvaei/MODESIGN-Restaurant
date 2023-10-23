"use client";

import Image from "next/image";
import menuImage from "@/public/home/Menu.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MenuTitle() {
  return (
    <article
      className={`flex flex-col gap-[60px] max-sm:gap-8 lg:sticky top-[4%] h-fit px-4`}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col gap-[22px] max-lg:text-center max-lg:px-6"
      >
        <div className="flex flex-col gap-3">
          <p
            className="font-josephin font-medium text-[15px] w-fit max-lg:mx-auto
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5"
          >
            M E N U
          </p>
          <h4 className="h4-title leading-10 max-sm:text-3xl">
            Try Our Special Offers
          </h4>
        </div>
        <p className="parag text-[#555555] max-sm:text-base">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content making it
          look like readable English.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Image src={menuImage} alt="menu" className="max-lg:w-[80%]" />
      </motion.div>

      <Link href="/menu" className="max-lg:mx-auto">
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="btn-white text-[#E1B168] font-josephin 
          text-[22px] leading-[27.83px] px-12 py-5 w-fit"
        >
          See all dishes
        </motion.button>
      </Link>
    </article>
  );
}
