import Image from "next/image";
import HeaderMenu from "./HeaderMenu";
import { Link } from "nextjs13-progress";
import storyPic from "@/public/header/Logo.svg";

export default function Header() {
  return (
    <header className="bg-[#292E36] w-full pt-16">
      <div className="flex pb-16 justify-evenly max-lg:flex-col max-lg:items-center max-lg:gap-4">
        <Link
          href="tel:987654321"
          className="btn-white px-9 py-5 text-[#DEDEDE] my-auto text-xl leading-[25.3px]"
        >
          Call - 987 654 321
        </Link>
        <Link href="/">
          <Image
            src={storyPic}
            alt="logo"
            priority={true}
            className="max-sm:max-w-xs"
          />
        </Link>
        <div className="flex items-center my-auto">
          <Link
            href="/reservation"
            className="btn-gold px-14 py-5 text-[22px] leading-[27.83px]"
          >
            Reservation
          </Link>
        </div>
      </div>
      <HeaderMenu />
    </header>
  );
}
