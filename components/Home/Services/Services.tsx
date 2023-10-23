"use client";

import ServicesItem from "./ServicesItem";
import { motion } from "framer-motion";

import openedHoursImage from "@/public/home/services/time.svg";
import menuImage from "@/public/home/services/menu.svg";
import deliveryImage from "@/public/home/services/delivery.svg";

const services = [
  { src: openedHoursImage, title: "Opened 24/7" },
  { src: menuImage, title: "Special Menus" },
  { src: deliveryImage, title: "Home Delivery" },
];

export default function Services() {
  return (
    <section
      className="py-[180px] px-20 bg-[#292E36] w-full grid grid-cols-[1fr_2fr] gap-32 justify-items-center
      max-xl:grid-cols-1 max-xl:gap-10 max-md:px-8 max-lg:py-[100px]"
    >
      <div className="flex flex-col text-white py-9 gap-5">
        <p
          className="font-josephin font-medium text-[15px] w-fit
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
        >
          WHAT WE OFFER
        </p>

        <h4 className="h4-title">Our Great Services</h4>

        <p className="parag">
          Lorem Ipsum is that it has a more-or-less normal distribution content
          making it look like readable English.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1 max-md:w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <ServicesItem src={service.src} title={service.title} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
