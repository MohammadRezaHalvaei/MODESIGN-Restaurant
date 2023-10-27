import Image from "next/image";
import ChooseItem from "./ChooseItem";
import OpacityAnimation from "../Animations/OpacityAnimation";
import HorizontalAnimation from "../Animations/HorizontalAnimation";
import VerticalAnimation from "../Animations/VerticalAnimation";

import choose from "@/public/reservation/bestchoose.jpg";
import fresh from "@/public/reservation/fresh.svg";
import delivery from "@/public/reservation/delivery.svg";
import quality from "@/public/reservation/quality.svg";
import allDay from "@/public/reservation/24-7.svg";

const items = [
  { src: fresh, title: "Fresh Food" },
  { src: delivery, title: "Fast Delivery" },
  { src: quality, title: "Qualty Maintain" },
  { src: allDay, title: "24/7 Service" },
];

export default function Choose() {
  return (
    <section
      className="py-[200px] max-w-[1378px] mx-auto grid grid-cols-2 px-10 items-center justify-items-center 
      max-lg:flex max-lg:flex-col-reverse max-lg:gap-14 max-md:px-6 max-lg:py-24"
    >
      <OpacityAnimation delay={0.2}>
        <Image src={choose} alt="Best Choose" className="h-full" />
      </OpacityAnimation>
      <article className="pl-[52px] max-lg:pl-0">
        <HorizontalAnimation
          delay={0.2}
          className="flex flex-col gap-3 text-[#292E36]"
        >
          <p
            className="font-josephin font-medium text-[15px] w-fit 
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
          >
            WHY CHOOSE US
          </p>

          <h4 className="h4-title max-md:text-3xl">Why We Are The Best?</h4>

          <p className="parag text-[#555555] mb-11 mt-[10px] max-md:text-lg max-sm:mb-8">
            Bring the table winwin survival strateges ensure proactive the
            domination the end of the day going forward new normal that has
            evolved froms generation on the runway heading towards streamlined
            cloud solution generated content in real times will have multiple
            touchpoints.
          </p>
        </HorizontalAnimation>

        <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1">
          {items.map((item, index) => (
            <VerticalAnimation delay={index * 0.2} key={item.title}>
              <ChooseItem src={item.src} title={item.title} />
            </VerticalAnimation>
          ))}
        </div>
      </article>
    </section>
  );
}
