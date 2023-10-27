import CountsItem from "./CountsItem";
import YAnimation from "@/components/Animations/YAnimation";

import fresh from "@/public/about/counts/fresh.svg";
import chef from "@/public/about/counts/chef.svg";
import drink from "@/public/about/counts/fresh.svg";
import vegan from "@/public/about/counts/vegan.svg";

const items = [
  { src: fresh, title: "Fresh Product", link: "menu" },
  { src: chef, title: "Skilled Chefs", link: "chefs" },
  { src: drink, title: "Drinks & Juices", link: "menu" },
  { src: vegan, title: "Vegan Cuisine", isLastItem: true, link: "menu" },
];

export default function Counts() {
  return (
    <section
      className="flex justify-center items-center bg-[url('/about/counts/Counts.jpg')] min-h-[560px] max-lg:py-10"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <article className="grid grid-cols-4 max-xl:grid-cols-2 max-xl:gap-x-40 max-lg:grid-cols-1">
        {items.map((item, index) => (
          <YAnimation delay={index * 0.2} key={item.title}>
            <CountsItem
              src={item.src}
              title={item.title}
              isLastItem={item?.isLastItem}
              link={item.link}
            />
          </YAnimation>
        ))}
      </article>
    </section>
  );
}
