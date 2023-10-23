"use client";

import ReservationForm from "@/components/Footer/ReservationForm";
import { motion } from "framer-motion";

export default function TableBook() {
  return (
    <section className="bg-[#1F242C]">
      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[1378px] mx-auto py-20 px-10"
      >
        <div className="flex flex-col items-center justify-center border border-[#858585] py-24 max-md:py-12">
          <div className="flex flex-col gap-5 items-center text-white mb-10">
            <p
              className="font-josephin font-medium text-[15px] w-fit 
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
            >
              RESERVATION
            </p>

            <h4 className="h4-title max-md:text-2xl">Be First Who Read News</h4>
          </div>
          <ReservationForm />
        </div>
      </motion.article>
    </section>
  );
}
