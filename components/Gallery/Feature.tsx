"use client";

import Image from "next/image";
import FeatureText from "./FeatureText";
import { motion } from "framer-motion";

import invite from "@/public/gallery/invite.jpg";
import fresh from "@/public/gallery/fresh.jpg";

const features = [
  {
    title: "Always fresh ingredients",
    text: "The people, food and the prime locations make Rodich the perfect place good friends & family to come together and have great time.",
  },
  {
    title: "We invite you to visit our restaurant",
    text: "Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.",
  },
];

export default function Feature() {
  return (
    <section className="py-[200px] max-w-[1378px] mx-auto max-lg:py-24 px-10 max-sm:px-6">
      <article className="grid grid-cols-2 items-center max-xl:grid-cols-1 max-xl:gap-20">
        <FeatureText
          title={features[0].title}
          text={features[0].text}
          className="pr-20 max-xl:pr-0"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image src={fresh} alt="Always Fresh" className="max-xl:w-full" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image src={invite} alt="Invite" className="max-xl:w-full" />
        </motion.div>
        <FeatureText
          title={features[1].title}
          text={features[1].text}
          className="pl-10 max-xl:pl-0"
        />
      </article>
    </section>
  );
}
