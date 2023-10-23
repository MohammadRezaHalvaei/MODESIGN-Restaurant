import Image from "next/image";
import StarterItem from "../Home/Menu/StarterItem";

import mainImg from "@/public/menu/main.jpg";
import grilled from "@/public/home/menu/Grilled.png";
import roastBeef from "@/public/home/menu/Roast-Beef.png";
import marrkesh from "@/public/home/menu/Marrkesh.png";
import spicy from "@/public/home/menu/Spicy.png";
import Link from "next/link";

const main = [
  {
    src: grilled,
    alt: "Grilled Salmon",
    menuTitle: "Grilled Salmon with Dil Sauce",
    price: "40",
  },
  {
    src: roastBeef,
    alt: "Roast Beef",
    menuTitle: "Roast Beef with Vegetable",
    price: "20",
  },
  {
    src: marrkesh,
    alt: "Marrkesh Vegetetarian",
    menuTitle: "Marrkesh Vegetetarian Curruy",
    price: "25",
  },
  {
    src: spicy,
    alt: "Spicy Vegan",
    menuTitle: "Spicy Vegan Potato Curry",
    price: "30",
  },
];

export default function MainDish() {
  return (
    <section
      className="grid grid-cols-[1fr_0.8fr] max-w-[1378px] mx-auto py-[200px] gap-[50px] px-10
      max-md:px-6 max-lg:py-24 max-lg:grid-cols-1"
    >
      <article className="pr-8">
        <StarterItem title="Main Dish" items={main} />
        <Link
          href="/order"
          className="btn-white text-[#E1B168] py-5 px-12 text-[22px] inline-block leading-[27.83px] mt-[60px]
          max-md:mt-8 max-md:text-lg max-sm:px-8 max-sm:py-3"
        >
          Order Now
        </Link>
      </article>
      <Image
        src={mainImg}
        alt="Starter Menu"
        className="h-full max-lg:w-full"
      />
    </section>
  );
}
