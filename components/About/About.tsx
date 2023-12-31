import Image from "next/image";
import { Rate } from "antd";
import { Link } from "nextjs13-progress";
import HorizontalAnimation from "@/components/Animations/HorizontalAnimation";
import VerticalAnimation from "@/components/Animations/VerticalAnimation";

import aboutImg from "@/public/about/about-landing.png";
import pattern from "@/public/about/landing-pattern.svg";
import seoImg from "@/public/about/Seo.png";

export default function About() {
  return (
    <section
      className="pt-[200px] pb-[296px] grid grid-cols-2 items-center px-10 max-lg:grid-cols-1 max-lg:gap-20
      max-w-[1378px] mx-auto max-lg:pt-[100px] max-lg:pb-[100px]"
    >
      <HorizontalAnimation
        xAxis={-100}
        delay={0.3}
        className="flex flex-col max-lg:items-center"
      >
        <div className="flex flex-col gap-5 mb-11 max-lg:text-center">
          <p
            className="font-josephin font-medium text-[15px] w-fit max-lg:mx-auto
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
          >
            ABOUT US
          </p>

          <h4 className="h4-title max-md:text-3xl">Quality and Tradition</h4>

          <p className="parag text-[#555555] max-md:text-lg">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using &apos;Content here, content gfshere
            making look like readable English. Many desktop publishing packages.
          </p>
        </div>
        <div className="flex flex-col gap-7 mb-[86px] max-lg:items-center">
          <p className="parag">JOSEFINE</p>
          <p className="font-cervantis text-5xl leading-[63.25px] text-[#292E36]">
            Josefine
          </p>
        </div>
        <Link
          href="/chefs"
          className="btn-white py-5 px-10 text-[22px] leading-[27.83px] text-[#E1B168] w-fit"
        >
          See our Chefs
        </Link>
      </HorizontalAnimation>
      <article className="relative mx-auto">
        <HorizontalAnimation delay={0.3}>
          <Image src={aboutImg} alt="About Landing" />
          <Image
            src={pattern}
            alt="About Pattern"
            className="absolute -right-20 -top-2 -z-10 rotating max-sm:hidden"
          />
        </HorizontalAnimation>

        <VerticalAnimation
          className="absolute -bottom-24 -left-52 bg-white shadow-[0_0_14px_0_rgba(0,0,0,0.2)] max-w-[400px] 
          max-lg:left-0 max-lg:bottom-0"
        >
          <div className="py-10 px-[58px] flex flex-col gap-5 max-lg:py-7 max-lg:gap-2.5">
            <div className="flex gap-7 items-center">
              <Image src={seoImg} alt="Seo" />
              <div>
                <h5 className="h5-title text-[#292E36] mb-4 max-lg:text-2xl">
                  Josefine
                </h5>
                <p className="parag text-[#4A4A4A] max-lg:text-base">
                  CEO & Founder
                </p>
              </div>
            </div>
            <p className="parag leading-[37px] text-[#555555] max-lg:text-base">
              Capitalize on low hanging fruit to identify a ballpark
            </p>
            <Rate disabled defaultValue={5} style={{ color: "#E1B168" }} />
          </div>
        </VerticalAnimation>
      </article>
    </section>
  );
}
