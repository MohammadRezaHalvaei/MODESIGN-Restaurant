"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Progress } from "antd";

import skilled from "@/public/chefs/Skilled.jpg";
import Link from "next/link";

const progresses = [
  { title: "Experienced", progress: 90 },
  { title: "Professionalism", progress: 70 },
  { title: "Creative", progress: 75 },
];

export default function ChefsSkill() {
  return (
    <section
      className="py-[200px] max-w-[1378px] grid grid-cols-2 mx-auto gap-[52px] max-lg:py-24 px-10 
      max-md:px-6 max-lg:grid-cols-1"
    >
      <motion.article
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-[70px] max-md:gap-9"
      >
        <div className="text-[#292E36]">
          <p
            className="font-josephin font-medium text-[15px] w-fit mb-3
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
          >
            BEST CHEFS
          </p>

          <h4 className="h4-title mb-[22px] max-md:text-3xl max-md:mb-4">
            Only Skilled Team
          </h4>

          <p className="parag text-[#555555] max-md:text-base">
            Bring tothe table survival strategies to ensured proactived
            domination At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined touchpoints for offshoring.
          </p>
        </div>
        <div className="flex flex-col gap-[60px] max-md:gap-7">
          {progresses.map((progress) => (
            <div key={progress.title}>
              <h5 className="h5-title text-[#292E36] mb-4 max-md:text-xl max-md:mb-2">
                {progress.title}
              </h5>
              <Progress
                percent={progress.progress}
                strokeColor="#292E36"
                trailColor="#C4C4C4"
                showInfo={false}
              />
            </div>
          ))}
        </div>
        <Link
          href="/menu"
          className="btn-white w-fit text-[#E1B168] py-5 px-12 text-[22px] leading-[27.83px] 
          max-lg:mx-auto max-lg:text-lg max-lg:px-6 max-lg:py-2.5"
        >
          See all dishes
        </Link>
      </motion.article>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image alt="Skilled Chef" src={skilled} className="h-full" />
      </motion.div>
    </section>
  );
}
