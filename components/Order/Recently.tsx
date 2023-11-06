import RecentlyItems from "./RecentlyItems";

import pancake from "@/public/order/pancakes.jpg";
import hawaiian from "@/public/order/hawaiian.jpg";
import vegBurger from "@/public/order/veg burger.jpg";
import { Link } from "nextjs13-progress";

const items = [
  { src: pancake, title: "Delicious pancakes", price: "14" },
  { src: hawaiian, title: "Hawaiian Chicken", price: "11" },
  { src: vegBurger, title: "Veg Burger", price: "16" },
];

export default function Recently() {
  return (
    <section className="bg-[#292E36] w-full">
      <div className="max-w-[1378px] mx-auto py-[100px] text-white text-center px-10 max-lg:py-12">
        <p
          className="font-josephin font-medium text-[15px] w-fit mx-auto mb-[22px]
          leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
        >
          THE MAIN FOOD
        </p>

        <h4 className="h4-title mb-12">Recently Orders</h4>
        <article className="grid grid-cols-3 gap-14 mb-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mb-5">
          {items.map((item) => (
            <RecentlyItems
              key={item.title}
              src={item.src}
              title={item.title}
              price={item.price}
            />
          ))}
        </article>
        <Link
          href="/order/app"
          className="btn-white inline-block py-5 px-12 text-[#E1B168] text-[22px] leading-[27.83px]
          max-md:mt-8 max-md:text-lg max-sm:px-8 max-sm:py-3"
        >
          Order Now
        </Link>
      </div>
    </section>
  );
}
