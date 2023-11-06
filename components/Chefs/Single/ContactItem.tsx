import Image, { StaticImageData } from "next/image";
import { Link } from "nextjs13-progress";

type ContactItemProps = {
  src: StaticImageData;
  title: string;
  text: string | undefined;
};

export default function ContactItem({ src, title, text }: ContactItemProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-[#292E36] min-w-[62px] min-h-[62px] rounded-full flex justify-center items-center">
        <Image src={src} alt={title} />
      </div>
      <div className="py-2">
        <h5 className="font-cormorant text-[22px] leading-[16.96px] mb-2 font-bold text-[#292E36]">
          {title}
        </h5>
        <Link
          href={`${
            title === "Contact Us"
              ? `tel:${text}`
              : title === "Mail"
              ? `mailto:${text}`
              : ""
          }`}
          className={`${
            (title === "Mail" || title === "Contact Us") && "text-[#e1b168]"
          } font-josephin text-[18px] leading-[22.77px] text-[#4A4A4A]`}
        >
          {text}
        </Link>
      </div>
    </div>
  );
}
