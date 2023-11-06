import Image, { StaticImageData } from "next/image";
import { Link } from "nextjs13-progress";

type ContactItemProps = {
  src: StaticImageData;
  alt: string;
  text: string;
};

export default function ContactItem({ src, alt, text }: ContactItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#292E36] rounded-full min-h-[55px] min-w-[55px] flex items-center justify-center">
        <Image src={src} alt={alt} className="m-[10px]" />
      </div>
      <Link
        href={
          alt === "Location"
            ? ""
            : alt === "Phone"
            ? `tel:${text}`
            : `mailto:${text}`
        }
        className={`parag text-[#4A4A4A] max-lg:text-base ${
          alt === "Location" && "pointer-events-none"
        }`}
      >
        {text}
      </Link>
    </div>
  );
}
