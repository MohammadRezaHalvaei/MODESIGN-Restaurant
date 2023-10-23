import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type SpecialOfferItemProps = {
  src: StaticImageData;
  priceSrc: StaticImageData;
  title: string;
  bg: string;
};

export default function SpecialOfferItem({
  priceSrc,
  src,
  title,
  bg,
}: SpecialOfferItemProps) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
      }}
      className="grid grid-cols-2 items-center mx-auto max-w-2xl p-10 max-lg:w-full
      max-xl:grid-cols-1 max-xl:gap-5"
    >
      <div className="flex flex-col gap-[30px] max-lg:items-center ">
        <Image src={priceSrc} alt="Price" />
        <div className="max-lg:text-center">
          <p
            className="font-josephin font-medium text-[15px] w-fit mb-5  max-lg:mx-auto
            leading-[11.57px] border-t border-b border-black py-1.5 tracking-[0.2em]"
          >
            50% OFFER GOING
          </p>

          <h4 className="h4-title mb-3.5">{title}</h4>

          <p className="parag">
            Lorem Ipsum is that it has a more-or-less normal
          </p>
        </div>
      </div>

      <Image src={src} alt={title} className="max-lg:mx-auto" />
    </motion.div>
  );
}
