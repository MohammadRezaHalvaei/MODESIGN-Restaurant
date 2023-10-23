import Image from "next/image";
import StarterItem from "../Home/Menu/StarterItem";

import dessertImg from "@/public/menu/dessert.jpg";
import apple from "@/public/home/menu/Apple.png";
import lemon from "@/public/home/menu/Lemon.png";
import octopus from "@/public/home/menu/Octopus.png";
import seaBass from "@/public/home/menu/Sea Bass.png";
import Link from "next/link";

const dessert = [
  {
    src: apple,
    alt: "Apple Pie",
    menuTitle: "Apple Pie with Cream",
    price: "40",
  },
  {
    src: lemon,
    alt: "Lemon Meringue",
    menuTitle: "Lemon Meringue Pie",
    price: "20",
  },
  {
    src: octopus,
    alt: "Tender Octopus and Fennel",
    menuTitle: "Tender Octopus and Fennel",
    price: "50",
  },
  {
    src: seaBass,
    alt: "Sea Bass Cevich",
    menuTitle: "Sea Bass Cevich",
    price: "35",
  },
];

export default function Dessert() {
  return (
    <section
      className="grid grid-cols-[0.8fr_1fr] max-w-[1378px] mx-auto py-[200px] gap-[50px] px-10 max-md:px-6 
      max-lg:py-24 max-lg:grid-cols-1"
    >
      <Image
        src={dessertImg}
        alt="Dessert Menu"
        className="h-full max-lg:w-full"
      />
      <article className="max-md:pr-8">
        <StarterItem title="Dessert" items={dessert} />
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
