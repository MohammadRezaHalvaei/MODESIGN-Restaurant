"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import appImage from "@/public/order/single/App logo.svg";
import pattern from "@/public/order/single/pattern.png";
import landing from "@/public/order/single/app-brief.png";
import apple from "@/public/order/single/appstore.png";
import google from "@/public/order/single/googleplay.png";
import Link from "next/link";

export default function AppBrief() {
  return (
    <section
      className="max-w-[1378px] mx-auto py-[200px] px-10 
      max-lg:py-24 max-md:px-6"
    >
      <div className="bg-[#C6EAF2] relative overflow-hidden grid grid-cols-2 items-center justify-items-center max-lg:grid-cols-1">
        <div
          className="flex flex-col gap-12 text-[#292E36] pl-20 py-20 
          max-lg:pl-10 max-lg:py-10 max-lg:pr-10 max-sm:pl-6 max-sm:py-6 max-sm:pr-6"
        >
          <Image src={appImage} alt="App Image" />
          <div>
            <p
              className="font-josephin font-medium text-[20px] w-fit mb-[26px] max-sm:text-base max-sm:text-center
              leading-[15.42px] border-t border-b border-[#292E36] py-2 tracking-[0.2em]"
            >
              50% OFFER FOR FIRST ORDER
            </p>
            <h3 className="h3-title mb-4 max-sm:text-4xl">
              Delicious Food Delivery
            </h3>
            <p className="parag text-[#555555] max-sm:text-lg">
              Dynamically target high-payoff intellectual capital for customized
              technologies. Objectively integrate emerging core competencies
              innovation rather than client-centric data.
            </p>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex gap-[30px]"
          >
            <Link href="https://apple.com">
              <Image src={apple} alt="Apple Store" className="max-h-[61px]" />
            </Link>
            <Link href="https://google.com">
              <Image src={google} alt="Google Play" className="max-h-[61px]" />
            </Link>
          </motion.div>
        </div>
        <Image
          src={pattern}
          alt="Pattern"
          className="absolute -top-10 right-36 max-lg:hidden"
        />
        <Image src={landing} alt="Landing" className="z-10 ml-auto" />
      </div>
    </section>
  );
}
