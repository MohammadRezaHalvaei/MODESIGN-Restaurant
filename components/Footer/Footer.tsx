import Image from "next/image";
import Link from "next/link";
import SocialMedia from "../Header/SocialMedia";
import XAnimation from "../Animations/XAnimations";
import YAnimation from "../Animations/YAnimation";

import logo from "@/public/header/Logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1F242C] text-white flex flex-col gap-16">
      <YAnimation
        delay={0.3}
        className="pt-[100px] grid grid-cols-3 items-center justify-items-center gap-16 px-4 max-md:grid-cols-1 max-md:pt-20"
      >
        <p className="font-josephin text-[22px] font-medium leading-[27.83px] underline">
          Instagram Feed
        </p>
        <Image src={logo} alt="logo" />

        <SocialMedia />
      </YAnimation>

      <YAnimation
        delay={0.5}
        className="grid grid-cols-[0.5fr_1fr_0.5fr] items-center justify-center px-9
        max-lg:grid-cols-1 max-lg:gap-10"
      >
        <div className="max-w-[266px] mx-auto max-lg:text-center">
          <p
            className="font-josephin font-medium text-[15px] w-fit mb-8 max-lg:mx-auto max-lg:mb-3
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
          >
            CONTACT
          </p>
          <p className="parag leading-[33.9px]">
            Iran - Alborz
            <br />
            <Link href="tel:+989357910493">
              Call - <span className="text-[#E1B168]">+989357910493</span>
              <br />
            </Link>
            <Link href="mailto:mamad76ha@gmail.com">
              <span className="text-[#E1B168]">mamad76ha@gmail.com</span>
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="parag mb-8 text-center max-lg:mb-4">
            Join our mailing list for updates, Get news & offers events.
          </p>
          <div className="flex items-center">
            <input type="email" placeholder="Email" className="input-style" />
            <button
              className="btn-white text-[#292E36] text-[22px] px-[68px] py-[19px] 
              leading-[27.83px] border-transparent bg-white max-lg:py-[13px] max-lg:px-5 max-lg:text-base"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-[266px]">
          <p
            className="font-josephin font-medium text-[15px] w-fit mb-8 ml-auto max-lg:mx-auto max-lg:mb-3
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
          >
            WORKING HOURS
          </p>
          <div className="flex flex-col items-end max-lg:items-center">
            <p className="parag leading-[33.9px]">
              <span className="text-[#E1B168]">Mon - Fri </span>: 7.00am -
              6.00pm
            </p>
            <p className="parag leading-[33.9px]">
              <span className="text-[#E1B168]">Sat </span>: 7.00am - 6.00pm
            </p>
            <p className="parag leading-[33.9px]">
              <span className="text-[#E1B168]">Sun </span>: 8.00am - 6.00pm
            </p>
          </div>
        </div>
      </YAnimation>
      <div
        className="flex justify-evenly py-[30px] border-t border-[#575B62] px-9
        max-lg:flex-col max-lg:gap-5 max-lg:items-center max-lg:px-4 max-lg:justify-center max-lg:py-5"
      >
        <XAnimation
          xAxis={-100}
          className="parag max-md:text-lg max-md:text-center"
        >
          © Copyright - Restaurantate | Coded by
          <Link
            href="https://modesign-portfolio.vercel.app"
            className="text-[#E1B168]"
            target="_blank"
          >
            {" "}
            MODESIGN{" "}
          </Link>
          - Powered by{" "}
          <Link
            href="https://www.figma.com"
            target="_blank"
            className="text-[#E1B168]"
          >
            Figma
          </Link>
        </XAnimation>
        <XAnimation className="parag">{new Date().getFullYear()}</XAnimation>
      </div>
    </footer>
  );
}
