import Image, { StaticImageData } from "next/image";
import { Link } from "nextjs13-progress";

type CountsItemType = {
  src: StaticImageData;
  title: string;
  isLastItem?: boolean;
  link: string;
};

export default function CountsItem({
  src,
  title,
  link,
  isLastItem = false,
}: CountsItemType) {
  return (
    <div
      className={`flex flex-col gap-7 text-white max-w-[368px]
      items-center text-center px-[32px] ${
        isLastItem ? "border-none" : "border-r broder-[#797E89]"
      }  pt-[38px] pb-12 max-xl:border-0`}
    >
      <Image src={src} alt={title} />
      <div>
        <h5 className="h5-title mb-3.5">{title}</h5>
        <p className="parag leading-[29.3px]">
          Professional consider everyone probls small niche friendly.
        </p>
      </div>
      <Link
        href={`/${link}`}
        className="parag text-[#E1B168] hover:opacity-70 dur-200 cursor-pointer"
      >
        See more
      </Link>
    </div>
  );
}
