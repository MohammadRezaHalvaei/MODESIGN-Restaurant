import PortfolioItem from "./PortfolioItem";
import Link from "next/link";
import OpacityAnimation from "../Animations/OpacityAnimation";

import pasta from "@/public/gallery/pasta.jpg";
import pizza from "@/public/gallery/pizza.jpg";
import veg from "@/public/gallery/veg.jpg";
import yogurt from "@/public/gallery/yogurt.jpg";
import meat from "@/public/gallery/meat.jpg";
import fruit from "@/public/gallery/fruit.jpg";

const picsRowOne = [
  { src: pasta, name: "Italian Pasta", menu: "Italian Cuisine" },
  { src: pizza, name: "Vegan Pizza", menu: "Main Course" },
  { src: veg, name: "Mixed Veg", menu: "Starters" },
];

const picsRowTwo = [
  { src: yogurt, name: "Frozen Yogurt", menu: "Starters" },
  { src: meat, name: "Stuffed Meat", menu: "Recipes" },
  { src: fruit, name: "Fruit Salad", menu: "Dessert" },
];

export default function Portfolio() {
  return (
    <OpacityAnimation
      delay={0.4}
      className="py-[200px] max-w-[1378px] mx-auto text-center px-10 max-lg:py-24 max-md:px-6"
    >
      <div className="grid grid-cols-[2.1fr_1fr_1fr] justify-items-center gap-8 mb-8 max-lg:grid-cols-1">
        {picsRowOne.map((pics) => (
          <PortfolioItem
            key={pics.name}
            src={pics.src}
            menu={pics.menu}
            name={pics.name}
          />
        ))}
      </div>
      <div className="grid grid-cols-[1fr_1fr_2.1fr] justify-items-center gap-8 mb-24  max-lg:grid-cols-1">
        {picsRowTwo.map((pics) => (
          <PortfolioItem
            key={pics.name}
            src={pics.src}
            menu={pics.menu}
            name={pics.name}
          />
        ))}
      </div>
      <Link
        href="/menu"
        className="btn-white text-[#E1B168] py-5 px-12 text-[22px] leading-[27.83px]"
      >
        See all dishes
      </Link>
    </OpacityAnimation>
  );
}
