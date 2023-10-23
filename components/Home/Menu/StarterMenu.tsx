import StarterItem from "./StarterItem";

import sacallops from "@/public/home/menu/Scallops.png";
import spring from "@/public/home/menu/Spring.png";
import frenchOnion from "@/public/home/menu/French-Onion.png";
import tomato from "@/public/home/menu/Tomato.png";
import grilled from "@/public/home/menu/Grilled.png";
import roastBeef from "@/public/home/menu/Roast-Beef.png";
import marrkesh from "@/public/home/menu/Marrkesh.png";
import spicy from "@/public/home/menu/Spicy.png";
import apple from "@/public/home/menu/Apple.png";
import lemon from "@/public/home/menu/Lemon.png";

const items = {
  starter: [
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
  ],

  main: [
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
  ],
  dessert: [
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
  ],
};

export default function StarterMenu() {
  return (
    <div className="mb-9 flex flex-col gap-[70px] max-lg:px-10 max-sm:px-4 max-sm:pr-14">
      <StarterItem title="Starters" items={items.starter} />
      <StarterItem title="Main Dish" items={items.main} />
      <StarterItem title="Dessert" items={items.dessert} />
    </div>
  );
}
