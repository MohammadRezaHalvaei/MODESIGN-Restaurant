"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogItem({ data }: { data: Posts }) {
  return (
    <>
      <section>
        <article className="text-center text-[#292E36] max-w-[780px] mx-auto mb-[60px] max-lg:mb-8">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-josephin font-medium text-[15px] w-fit mb-3
            leading-[11.57px] tracking-[0.2em] flex gap-5 mx-auto"
          >
            <span className="border-t border-b border-[#E1B168] py-1.5">
              Recipes
            </span>

            <span className="border-t border-b border-[#E1B168] py-1.5">
              FEB 22, 2022
            </span>
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="h2-title mb-2.5 max-lg:text-4xl max-sm:text-2xl">
              {data?.title}
            </h2>

            <p className="parag text-[#555555] max-lg:text-lg max-sm:text-base">
              {data?.subTitle}
            </p>
          </motion.div>
        </article>
        <article className="mb-10">
          <Image
            src={data?.src}
            alt={data?.title}
            className="mb-[52px]"
            height={612}
            width={1320}
          />
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="parag text-[#555555] max-w-[900px] mx-auto max-lg:text-lg max-sm:text-base"
          >
            Uniquely matrix economically sound value through cooperative
            technology. Competently parallel task fully researched data and
            enterprise process improvements. Collaboratively expedite quality
            manufactured products via client-focused results quickly communicate
            enabled technology and turnkey leadership skills. Uniquely enable
            accurate supply chains rather than friction technology.
          </motion.p>
        </article>
      </section>
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-[900px] mx-auto"
      >
        <article className="flex flex-col gap-[18px]">
          <h4 className="font-cormorant text-4xl leading-[42px] text-[#292E36] max-md:text-2xl">
            Perfect Food for all Hungry Livings
          </h4>
          <p className="parag text-[#555] max-md:text-base">
            Objectively integrate enterprise-wide strategic theme areas with
            functionalized infrastructures ipsum Interactively productized
            premium technologies where as interdependent quality vectors
            rapaciously utilize enterprise experiences via 24/7 markets.
          </p>
          <ul className="list-disc ml-8 text-[#555555] mb-10 flex flex-col gap-1">
            <li className="lst max-md:text-base">
              Dynamically target high-payoff intellectual capital for customized
            </li>
            <li className="lst max-md:text-base">
              Interactively procrastinate high-payoff content
            </li>
            <li className="lst max-md:text-base">
              Credibly reinter mediate backend ideas for cross-platform models
            </li>
          </ul>
          <p className="quote py-16 px-[72px] text-center mb-10 max-md:py-3 max-md:px-7">
            “The ultimate learn-how-to-cook book filled with 100+ amazing,
            easy-to-follow recipes for every occasion plus helpful kitchen
            tricks to inspire young cooks
          </p>
        </article>
        <article className="text-[#555]">
          <h4 className="font-cormorant text-4xl leading-[42px] text-[#292E36] mb-[18px] max-md:text-2xl">
            What burger recipes exist you can follow?
          </h4>
          <p className="parag mb-8 max-md:text-base">
            At risus viverra adipiscing at tellus integer feugiat pretium fusce
            id velit ut tortor sagittis scelerisque purus semper eget lectus
            urna duis convallis porta nibh venenatis crase sed felis egets neque
            laoreet aliquam nunc lobortis mattis aliquam faucibus purus in.
          </p>
          <ol className="list-decimal ml-8">
            <li className="lst max-md:text-base">
              It brings the right people together with all the right information
              and tools to get work done
            </li>
            <li className="lst max-md:text-base">
              We provide operational efficiency, data security, and flexible
              scale
            </li>
            <li className="lst max-md:text-base">
              Your best work, together in one package that works seamlessly from
              your computer
            </li>
            <li className="lst max-md:text-base">
              Delivers the tools you need to save time Improve field performance
              always
            </li>
          </ol>
        </article>
      </motion.section>
    </>
  );
}
