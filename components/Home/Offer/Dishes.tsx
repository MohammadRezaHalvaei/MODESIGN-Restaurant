import DishesItem from "./DishesItem";
import Link from "next/link";
import VerticalAnimation from "@/components/Animations/VerticalAnimation";

import dishOne from "@/public/home/offer/dishes/1.png";
import dishTwo from "@/public/home/offer/dishes/2.png";
import dishThree from "@/public/home/offer/dishes/3.png";
import dishFour from "@/public/home/offer/dishes/4.png";

const sources = [dishOne, dishTwo, dishThree, dishFour];

export default function Dishes() {
  return (
    <>
      <div
        className="grid grid-cols-4 gap-8 px-10 max-md:gap-y-10 max-md:px-2
        max-xl:grid-cols-2 max-xl:gap-x-16 max-md:grid-cols-1 max-md:w-full"
      >
        {sources.map((src, index) => (
          <VerticalAnimation delay={0.2 * index} key={index} className="px-10">
            <DishesItem src={src} />
          </VerticalAnimation>
        ))}
      </div>
      <Link href="/menu">
        <VerticalAnimation
          delay={0}
          className="btn-white text-[#E1B168] font-medium text-[22px] px-12 py-5"
        >
          See all dishes
        </VerticalAnimation>
      </Link>
    </>
  );
}
