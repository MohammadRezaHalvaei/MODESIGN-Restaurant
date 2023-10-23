"use client";

import Image from "next/image";
import Starter from "@/components/Menu/Starter";
import MainDish from "@/components/Menu/MainDish";
import { motion } from "framer-motion";
import Dessert from "@/components/Menu/Dessert";
import Reservation from "@/components/Footer/Reservation";

import chicken from "@/public/menu/chicken.jpg";
import watermelon from "@/public/menu/watermelon.jpg";

export default function MenuPage() {
  return (
    <>
      <Starter />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image src={chicken} alt="Chicken" className="min-h-[200px]" />
      </motion.div>
      <MainDish />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image src={watermelon} alt="Water Melon" className="min-h-[200px]" />
      </motion.div>
      <Dessert />
      <Reservation />
    </>
  );
}
