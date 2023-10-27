import Image from "next/image";
import Link from "next/link";
import HorizontalAnimation from "@/components/Animations/HorizontalAnimation";
import VerticalAnimation from "@/components/Animations/VerticalAnimation";

type BlogCardTypes = {
  src: string;
  title: string;
  text: string;
  link: number | string;
};

export default function BlogCard({ src, title, text, link }: BlogCardTypes) {
  return (
    <VerticalAnimation delay={0.3} className="group grid auto-rows-auto">
      <div className="relative">
        <Image
          src={src}
          alt={title}
          width={663}
          height={388}
          className="w-full h-full"
        />
        <div
          className="w-full h-full bg-[#292e3699]  absolute top-0 opacity-0 
          group-hover:opacity-100 transition-all duration-600"
        >
          <Link
            href={`blog/${link}`}
            className="btn-white text-[#E1B168] py-5 px-12 text-[22px] max-xl:text-base max-xl:px-6 max-xl:py-2.5
            leading-[27.83px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:py-4 max-md:px-10 max-md:text-lg"
          >
            View More
          </Link>
        </div>
      </div>
      <div
        className="px-10 py-11 flex flex-col gap-5 border border-[#C4C4C4] text-[#292E36]
        max-lg:px-6 max-lg:py-6"
      >
        <div
          className="font-josephin font-medium text-[15px] w-fit max-lg:text-xs max-lg:gap-3
            leading-[11.57px] tracking-[0.2em] flex gap-5 max-lg:flex-col"
        >
          <HorizontalAnimation
            delay={0.3}
            className="border-t border-b border-[#E1B168] py-1.5"
          >
            RESTAURANTS
          </HorizontalAnimation>

          <HorizontalAnimation
            delay={0.6}
            className="border-t border-b border-[#E1B168] py-1.5"
          >
            FEB 22, 2022
          </HorizontalAnimation>
        </div>

        <Link
          href={`blog/${link}`}
          className="font-cormorant text-[35px] leading-[42px] font-bold hover:text-[#E1B168] dur-200
          max-lg:text-2xl"
        >
          {title}
        </Link>

        <p className="parag text-[#555555] max-lg:text-lg">{text}</p>
      </div>
    </VerticalAnimation>
  );
}
