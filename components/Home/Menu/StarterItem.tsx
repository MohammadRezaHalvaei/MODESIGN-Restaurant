"use client";

import Image, { StaticImageData } from "next/image";
import patternImage from "@/public/home/menu/Pattern.svg";
import { motion } from "framer-motion";

type Item = {
  src: StaticImageData;
  alt: string;
  menuTitle: string;
  price: string;
};

type StarterItemProps = {
  title: string;
  items: Item[];
};

export default function StarterItem({ title, items }: StarterItemProps) {
  return (
    <div className="flex flex-col gap-10 max-xl:pr-4 xl:pr-0">
      <h4 className="h4-title text-[#292E36]">{title}</h4>
      <div className="flex flex-col gap-[30px] max-sm:gap-1">
        {items.map((item, index) => (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex gap-4 items-center"
            key={item.alt}
          >
            <div className="bg-[#292E36] min-w-[80px] min-h-[80px] rounded-full flex justify-center items-center">
              <Image src={item.src} alt={item.alt} width={84} height={84} />
            </div>
            <div className="py-4 text-[#292E36] flex flex-col gap-3">
              <h5 className="h5-title max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
                {item.menuTitle}
              </h5>
              <p className="parag text-[#555555] flex items-center gap-2 max-lg:text-base max-md:text-sm">
                Candied Jerusalem artichokes, truffle
                <span className="max-lg:w-[60%] flex gap-2 items-center">
                  <Image src={patternImage} alt="" />
                  <span className="h5-title text-[#292E36] pb-2 max-lg:text-2xl">
                    ${item.price}
                  </span>
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
