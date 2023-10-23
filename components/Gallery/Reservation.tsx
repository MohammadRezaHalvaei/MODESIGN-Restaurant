"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Reservation() {
  return (
    <section className="bg-[url('/gallery/reservation.jpg')] max-h-[560px] pl-10 max-sm:pl-0">
      <motion.article
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-[1378px] text-white mx-auto py-[92px]"
      >
        <div className="w-[45%] max-xl:w-[65%] max-md:w-[85%] max-sm:mx-auto max-sm:text-center">
          <p
            className="font-josephin font-medium text-[15px] w-fit mb-3.5 max-sm:mx-auto
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
          >
            RESERVATION
          </p>
          <h1 className="font-cormorant font-bold text-[85px] leading-[76.16px] mb-[38px] max-md:text-5xl max-sm:text-4xl">
            This evening will be graet!
          </h1>
          <p className="parag mb-8 max-sm:text-base">
            Lorem Ipsum is that it has a more-or-less normal look like readable
            English.
          </p>

          <Link
            href="/reservation"
            className="btn-white border-[#E1B168] px-12 py-5 text-[22px]
            leading-[27.83px] text-[#E1B168] max-sm:px-6 max-sm:py-2.5 max-sm:text-base"
          >
            Book a Table
          </Link>
        </div>
      </motion.article>
    </section>
  );
}
