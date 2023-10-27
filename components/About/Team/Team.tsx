import ChefsItem from "./ChefsItem";
import VerticalAnimation from "@/components/Animations/VerticalAnimation";

import avroko from "@/public/about/team/Avroko.png";
import evan from "@/public/about/team/Evan Mattew.png";
import diane from "@/public/about/team/Diane Clarkson.png";
import dan from "@/public/about/team/Dan Rafalin.png";

const chefs = [
  { src: avroko, name: "Avroko", role: "Master Chef", link: "Avroko" },
  { src: evan, name: "Evan Mattew", role: "Master Chef", link: "Evan Mattew" },
  {
    src: diane,
    name: "Diane Clarkson",
    role: "Master Chef",
    link: "Diane Clarkson",
  },
  {
    src: dan,
    name: "Dan Rafalin",
    role: "Assistant Chef",
    link: "Dan Rafalin",
  },
];

export default function Team() {
  return (
    <section className="py-[186px] max-lg:py-[100px]">
      <article className="flex flex-col items-center gap-3 mb-[46px] px-9">
        <p
          className="font-josephin font-medium text-[15px] w-fit
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
        >
          TEAM
        </p>

        <h4 className="h4-title max-lg:text-center max-lg:text-4xl">
          Meet Our Professional Chefs
        </h4>
      </article>
      <article
        className="grid grid-cols-4 gap-3.5 justify-items-center px-10 
        max-xl:grid-cols-2 max-md:grid-cols-1 max-md:gap-10"
      >
        {chefs.map((chef) => (
          <VerticalAnimation delay={0.3} key={chef.name}>
            <ChefsItem
              link={chef.link}
              src={chef.src}
              name={chef.name}
              role={chef.role}
            />
          </VerticalAnimation>
        ))}
      </article>
    </section>
  );
}
