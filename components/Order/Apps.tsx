import AppsItem from "./AppsItem";
import Link from "next/link";
import OpacityAnimation from "../Animations/OpacityAnimation";
import VerticalAnimation from "../Animations/VerticalAnimation";

import delicious from "@/public/order/delicious.svg";
import foodDelivery from "@/public/order/food delivery.svg";
import foodCourt from "@/public/order/food court.svg";
import foodHut from "@/public/order/food hut.svg";
import daily from "@/public/order/daily delivery.svg";
import fastFood from "@/public/order/fast food.svg";

const apps = [
  { src: delicious, alt: "Delicious Food Delivery" },
  { src: foodDelivery, alt: "Food Delivery" },
  { src: foodCourt, alt: "Food Court" },
  { src: foodHut, alt: "Food Hut" },
  { src: daily, alt: "Daily Delivery" },
  { src: fastFood, alt: "Fast Food" },
];

export default function Apps() {
  return (
    <section className="max-w-[1378px] mx-auto py-[200px] flex flex-col gap-12 items-center px-10 max-lg:py-24">
      <article className="flex flex-col gap-[22px] text-center max-w-[702px] max-lg:gap-4">
        <p
          className="font-josephin font-medium text-[15px] w-fit mx-auto
          leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
        >
          GET CONNECTED
        </p>

        <h4 className="h4-title max-lg:text-4xl">Order Via App</h4>

        <p className="parag text-[#555555] max-lg:text-lg">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content making.
        </p>
      </article>
      <article className="grid grid-cols-3 gap-y-[50px] gap-x-[50px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-y-8">
        {apps.map((app) => (
          <OpacityAnimation delay={0.2} key={app.alt}>
            <AppsItem src={app.src} alt={app.alt} />
          </OpacityAnimation>
        ))}
      </article>
      <Link href="order/app">
        <VerticalAnimation
          delay={0}
          className="btn-white px-12 py-5 text-[#E1B168] text-[22px] leading-[27.83px]
          max-md:px-8 max-md:py-3 max-md:text-base"
        >
          Order Now
        </VerticalAnimation>
      </Link>
    </section>
  );
}
