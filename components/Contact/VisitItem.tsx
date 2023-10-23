import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import call from "@/public/contact/visitCall.svg";
import mail from "@/public/contact/visitMail.svg";

type VisitItemProps = {
  src: StaticImageData;
  title: string;
};

export default function VisitItem({ src, title }: VisitItemProps) {
  return (
    <div className="grid grid-cols-2 items-center w-full max-md:grid-cols-1">
      <div
        className="text-[#292E36] border border-[#C4C4C4] py-[100px] px-[30px] h-full 
        max-lg:py-12 max-sm:px-4"
      >
        <h5 className="h5-title leading-9 mb-3">{title}</h5>
        <div className="flex flex-col gap-9 text-[#4A4A4A] font-josephin text-[18px] leading-[22.77px]">
          <p>Riverside 25, San Francisco California</p>
          <Link
            href="mailto:contact@restaurantate.com"
            className="flex gap-2.5 items-center"
          >
            <Image src={mail} alt="Email" />
            <p>contact@restaurantate.com</p>
          </Link>
          <Link
            href="tel:(487) 870 - 1087"
            className="flex gap-2.5 items-center"
          >
            <Image src={call} alt="Phone" />
            <p>(487) 870 - 1087</p>
          </Link>
        </div>
      </div>
      <Image src={src} alt={title} className="h-full w-full max-sm:h-72" />
    </div>
  );
}
