import RecentlyItems from "./RecentlyItems";

import spring from "@/public/order/spring-onion.jpg";
import sausage from "@/public/order/veg-sausage.jpg";
import pancake from "@/public/order/dessert-pancake.jpg";
import { Link } from "nextjs13-progress";

const items = [
  { src: spring, title: "Spring Oinion", price: "18" },
  { src: sausage, title: "Veg Sausage ", price: "13" },
  { src: pancake, title: "Dessert Pancake", price: "15" },
];

export default function Popular({ link }: { link: string }) {
  return (
    <section className="max-w-[1378px] mx-auto py-[200px] text-[#292E36] text-center px-10 max-lg:py-24">
      <p
        className="font-josephin font-medium text-[15px] w-fit mx-auto mb-[22px]
          leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
      >
        MOSTLY LOVED
      </p>

      <h4 className="h4-title mb-12">Frequently Orders</h4>
      <article className="grid grid-cols-3 gap-14 mb-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mb-5">
        {items.map((item) => (
          <RecentlyItems
            key={item.title}
            src={item.src}
            title={item.title}
            price={item.price}
            dark={false}
          />
        ))}
      </article>
      <Link
        href={`/${link}`}
        className="btn-white inline-block py-5 px-12 text-[#E1B168] text-[22px] leading-[27.83px]
        max-md:mt-8 max-md:text-lg max-sm:px-8 max-sm:py-3"
      >
        Order Now
      </Link>
    </section>
  );
}
