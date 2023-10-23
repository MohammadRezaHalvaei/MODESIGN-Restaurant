import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type PortfolioItemProps = {
  src: StaticImageData;
  name: string;
  menu: string;
};

export default function PortfolioItem({ src, name, menu }: PortfolioItemProps) {
  return (
    <Link href={`/gallery/${name}`} className="group relative w-full">
      <Image src={src} alt={name} className="h-full w-full" />
      <div
        className="w-full h-full bg-[#292E36B2] absolute top-0 flex flex-col 
        items-center justify-center dur-200 opacity-0 group-hover:opacity-100"
      >
        <h4 className="h4-title text-white mb-3">{name}</h4>
        <p className="font-josephin text-[22px] text-[#E1B168] leading-[16.96px]">
          {menu}
        </p>
      </div>
    </Link>
  );
}
