import SocialMedia from "@/components/Header/SocialMedia";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import YAnimation from "@/components/Animations/YAnimation";

type ChefsItemProps = {
  src: StaticImageData;
  name: string;
  role: string;
  link: string;
};

export default function ChefsItem({ src, name, role, link }: ChefsItemProps) {
  return (
    <Link href={`/chefs/${link}`} className="group text-center dur-200">
      <YAnimation delay={0}>
        <div className="relative overflow-hidden">
          <Image src={src} alt={name} />
          <div
            className="bg-[#292E36] w-full absolute bottom-0 top-auto py-3 translate-y-16 dur-200
         group-hover:opacity-100 group-hover:-translate-y-0 overflow-hidden"
          >
            <SocialMedia />
          </div>
        </div>
        <h5 className="h5-title mb-2 mt-7 text-[#292E36]">{name}</h5>
        <p className="parag text-[#555555]">{role}</p>
      </YAnimation>
    </Link>
  );
}
