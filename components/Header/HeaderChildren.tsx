import Image from "next/image";
import { Link } from "nextjs13-progress";
import OpacityAnimation from "../Animations/OpacityAnimation";

import landingPic from "@/public/header/Landing.png";
import pattern from "@/public/header/Pattern.svg";

export default function HeaderChildren() {
  return (
    <div className="bg-[#292E36]">
      <div
        className="grid grid-cols-2 mx-auto max-w-screen-2xl relative overflow-hidden
        max-xl:grid-cols-1"
      >
        <OpacityAnimation
          delay={0}
          className="flex py-[192.3px] flex-col text-white gap-8 max-w-[600px] pl-10
          max-xl:mx-auto max-xl:text-center max-xl:mb-[800px] max-xl:max-w-full max-xl:px-10 max-xl:pt-20
          max-sm:mb-0 max-sm:pb-10"
        >
          <h1 className="font-cormorant text-[90px] leading-[77.1px] max-sm:text-5xl">
            Welcome to Restaurantate
          </h1>
          <p className="parag max-sm:text-base">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry&apos;s standard dummy .
          </p>
          <Link
            href={"/menu"}
            className="btn-white px-[60px] max-xl:mx-auto py-5 w-fit mt-3 text-[22px] laeding-[27.83px]"
          >
            View Menu
          </Link>
        </OpacityAnimation>

        <OpacityAnimation delay={0} className="absolute -right-10 top-4">
          <Image
            src={pattern}
            alt="Landing"
            className="rotating max-xl:hidden"
          />
        </OpacityAnimation>

        <Image
          src={landingPic}
          alt="Landing"
          className="absolute right-1 top-6 max-sm:relative
          max-xl:bottom-0 max-xl:top-[unset] max-xl:right-1/2 max-xl:translate-x-1/2"
        />
      </div>
    </div>
  );
}
