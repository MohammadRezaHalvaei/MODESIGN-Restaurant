import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import fb from "@/public/gallery/single/Fb.svg";
import insta from "@/public/gallery/single/Insta.svg";
import pintrest from "@/public/gallery/single/Pintrest.svg";
import twitter from "@/public/gallery/single/Twiter.svg";

type GalleryItemsProps = {
  src: StaticImageData;
  title: string;
};

export default function GalleryItems({ src, title }: GalleryItemsProps) {
  return (
    <article className="grid grid-cols-[1.5fr_1fr] items-center">
      <Image src={src} alt={title} className="h-full" />
      <div className="pl-14">
        <h1 className="h1-title text-[#292E36] mb-4">{title}</h1>
        <p className="parag text-[#555555]">
          Typical spaghetti is made from water, milled wheat, and flour, but
          authentic spaghetti is made with durum wheat semolina.
        </p>
        <br />
        <p className="parag text-[#555555]">
          Spaghetti is Italy&apos;s classic pasta that is known for its long,
          thin, cylindrical shape.
        </p>
        <br />
        <h6 className="font-cormorant font-bold text-[#292E36] text-[22px] leading-[47.1px]">
          CATEGORY: <span className="text-[#555555]">Main Courses</span>
        </h6>

        <h6 className="font-cormorant font-bold text-[#292E36] text-[22px] leading-[47.1px]">
          DATE: <span className="text-[#555555]">October 20,2023</span>
        </h6>

        <h6 className="font-cormorant font-bold text-[#292E36] text-[22px] leading-[47.1px]">
          TAGS: <span className="text-[#555555]">Recipes, Sweet, Tasty</span>
        </h6>
        <h6 className="font-cormorant font-bold text-[#292E36] text-[22px] leading-[47.1px] flex">
          SHARE:
          <span className="text-[#555555] flex gap-3 ml-2 items-center">
            <Link href="https://Instagram.com">
              <Image src={insta} alt="Instagram" />
            </Link>
            <Link href="https://facebook.com">
              <Image src={fb} alt="Facebook" />
            </Link>
            <Link href="https://twitter.com">
              <Image src={twitter} alt="Twitter" />
            </Link>
            <Link href="https://pintrest.com">
              <Image src={pintrest} alt="Pintrest" />
            </Link>
          </span>
        </h6>
      </div>
    </article>
  );
}
