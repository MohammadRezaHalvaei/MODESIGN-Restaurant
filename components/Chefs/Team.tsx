import ChefsItem from "../About/Team/ChefsItem";

import avroko from "@/public/chefs/Avroko.png";
import evan from "@/public/chefs/Evan.png";
import diane from "@/public/chefs/Diane.png";
import dan from "@/public/chefs/Dan.png";
import abramo from "@/public/chefs/Abramo.png";
import takeo from "@/public/chefs/Takeo.png";

const chefs = [
  { src: avroko, name: "Avroko", role: "Master Chef" },
  { src: evan, name: "Evan Mattew", role: "Master Chef" },
  {
    src: diane,
    name: "Diane Clarkson",
    role: "Master Chef",
  },
  {
    src: dan,
    name: "Dan Rafalin",
    role: "Assistant Chef",
  },
  {
    src: abramo,
    name: "Abramo Baldovino",
    role: "Master Chef",
  },
  {
    src: takeo,
    name: "Takeo Andrea",
    role: "Master Chef",
  },
];

export default function Team() {
  return (
    <section className="max-w-[1378px] mx-auto py-[200px] max-lg:py-24 px-10 max-md:px-4">
      <div className="flex flex-col gap-3 items-center text-[#292E36] mb-[46px]">
        <p
          className="font-josephin font-medium text-[15px] w-fit 
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
        >
          TEAM
        </p>

        <h4 className="h4-title text-center max-lg:text-3xl">
          Meet Our Professional Chefs
        </h4>
      </div>
      <article className="grid grid-cols-3 justify-items-center gap-x-10 gap-y-8 max-lg:grid-cols-2 max-md:grid-cols-1">
        {chefs.map((chef) => (
          <ChefsItem
            key={chef.name}
            link={chef.name}
            src={chef.src}
            name={chef.name}
            role={chef.role}
          />
        ))}
      </article>
    </section>
  );
}
