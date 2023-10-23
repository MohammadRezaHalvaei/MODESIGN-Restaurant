"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import instagram from "@/public/header/icons/Insta.svg";
import facebook from "@/public/header/icons/Fb.svg";
import twitter from "@/public/header/icons/Twiter.svg";
import pintrest from "@/public/header/icons/Pintrest.svg";
import Link from "next/link";

const icons = [
  { src: instagram, alt: "Instagram", link: "https://Instagram.com" },
  { src: facebook, alt: "Facebook", link: "https://facebook.com" },
  { src: twitter, alt: "Twitter", link: "https://Twitter.com" },
  { src: pintrest, alt: "Pintrest", link: "https://Pintrest.com" },
];

export default function SocialMedia() {
  return (
    <div className="flex gap-3 items-center justify-center">
      {icons.map((icon, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-10 w-10 flex justify-center items-center 
          icon-hover dur-200 cursor-pointer"
          key={icon.alt}
        >
          <Image src={icon.src} alt={icon.alt} />
        </motion.div>
      ))}
    </div>
  );
}
