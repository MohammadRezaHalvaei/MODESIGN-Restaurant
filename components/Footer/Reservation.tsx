"use client";

import Image from "next/image";
import ReservationForm from "./ReservationForm";
import { motion } from "framer-motion";

import background from "@/public/footer/ReservationBg.jpg";

export default function Reservation() {
  return (
    <section className="relative">
      <Image
        src={background}
        alt="Reservation Background"
        className="max-md:h-[732px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="p-[154px] w-[60%] max-xl:w-[70%] max-lg:w-[85%] absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 bg-[#292E36F2] flex flex-col gap-10 max-xl:p-10 max-lg:p-6 "
      >
        <div className="flex flex-col gap-5 items-center text-white max-lg:gap-2.5">
          <p
            className="font-josephin font-medium text-[15px] w-fit max-lg:text-[12px]
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
          >
            RESERVATION
          </p>

          <h4 className="h4-title max-lg:text-3xl">Book your table now</h4>
        </div>
        <ReservationForm />
      </motion.div>
    </section>
  );
}
