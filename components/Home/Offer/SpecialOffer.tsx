"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import hamburgerImg from "@/public/home/offer/Hamburger.png";
import pizzaImg from "@/public/home/offer/Pizza.png";
import pizzaPrice from "@/public/home/offer/PizzaPrice.png";
import hamPrice from "@/public/home/offer/HamPrice.png";
import SpecialOfferItem from "./SpecialOfferItem";

const offers = [
  {
    src: hamburgerImg,
    priceSrc: hamPrice,
    title: "Chicken Burger",
    bg: "/home/offer/HamburgerBg.jpg",
  },
  {
    src: pizzaImg,
    priceSrc: pizzaPrice,
    title: "Chicken Pizza",
    bg: "/home/offer/PizzaBg.jpg",
  },
];

export default function SpecialOffer() {
  return (
    <article className="flex flex-col items-center gap-[68px]">
      <div className="flex flex-col gap-[22px] max-w-[702px] text-center px-9">
        <div className="flex flex-col gap-3 items-center text-[#292E36]">
          <p
            className="font-josephin font-medium text-[15px] w-fit
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5"
          >
            O F F E R
          </p>

          <h4 className="h4-title">Our special Offer dishes</h4>
        </div>
        <p className="parag">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using `&apos;Content here, content making.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 px-10 max-lg:grid-cols-1 max-lg:w-full max-lg:px-5">
        {offers.map((offer) => (
          <SpecialOfferItem
            key={offer.title}
            src={offer.src}
            priceSrc={offer.priceSrc}
            title={offer.title}
            bg={offer.bg}
          />
        ))}
      </div>
    </article>
  );
}
