import Image from "next/image";
import starterImg from "@/public/menu/starter.jpg";
import StarterItem from "../Home/Menu/StarterItem";

import sacallops from "@/public/home/menu/Scallops.png";
import spring from "@/public/home/menu/Spring.png";
import frenchOnion from "@/public/home/menu/French-Onion.png";
import tomato from "@/public/home/menu/Tomato.png";
import Link from "next/link";

const starter = [
  {
    src: sacallops,
    alt: "Raw Scallops",
    menuTitle: "Raw Scallops from Erquy",
    price: "40",
  },
  {
    src: spring,
    alt: "Spring Roll",
    menuTitle: "Spring Roll",
    price: "20",
  },
  {
    src: frenchOnion,
    alt: "French Onion",
    menuTitle: "French Onion Soup",
    price: "25",
  },
  {
    src: tomato,
    alt: "Tomato Bruschetta",
    menuTitle: "Tomato Bruschetta",
    price: "30",
  },
];

export default function Starter() {
  return (
    <section
      className="grid grid-cols-[0.8fr_1fr] max-w-[1378px] mx-auto py-[200px] gap-[50px] px-10 max-md:px-6 
      max-lg:py-24 max-lg:grid-cols-1"
    >
      <Image
        src={starterImg}
        alt="Starter Menu"
        className="h-full max-lg:w-full"
      />
      <article className="max-md:pr-8">
        <StarterItem title="Starters" items={starter} />
        <Link
          href="/order"
          className="btn-white text-[#E1B168] py-5 px-12 text-[22px] inline-block leading-[27.83px] mt-[60px]
          max-md:mt-8 max-md:text-lg max-sm:px-8 max-sm:py-3"
        >
          Order Now
        </Link>
      </article>
    </section>
  );
}
