"use client";

import Image, { StaticImageData } from "next/image";
import { ConfigProvider, Rate } from "antd";
import { motion } from "framer-motion";

import pattern from "@/public/order/pattern.svg";

type RecentlyItemsProps = {
  src: StaticImageData;
  title: string;
  price: string;
  dark?: boolean;
};

export default function RecentlyItems({
  src,
  title,
  price,
  dark = true,
}: RecentlyItemsProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Image src={src} alt={title} className="max-md:w-full" />
      <div
        className={`${
          dark ? "bg-[#343942]" : "bg-white shadow-[0_2px_25px_0_#0000001A]"
        }`}
      >
        <div
          className={`py-7 px-6 max-xl:px-3 ${
            dark ? "text-white" : "text-[#292E36]"
          }`}
        >
          <h6 className="h6-title leading-[19.28px] mb-4">{title}</h6>
          <Image src={pattern} alt="Pattern" className="mb-2 max-md:w-full" />
          <div className="flex justify-between items-center">
            <div className="flex gap-1.5 items-center">
              <p className="parag line-through text-[#B8B8B8] leading-[20px] self-end mb-[1px]">
                $20.00
              </p>
              <p className="font-cormorant text-[22px] leading-[26.64px] font-bold">
                ${price}.00
              </p>
            </div>
            <ConfigProvider
              theme={{
                token: {
                  marginXS: 2,
                },
              }}
            >
              <Rate disabled defaultValue={5} style={{ color: "#E1B168" }} />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
