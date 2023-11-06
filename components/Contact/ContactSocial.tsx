import Image, { StaticImageData } from "next/image";
import { Link } from "nextjs13-progress";

type ContactSocialProps = {
  src: StaticImageData;
  alt: string;
  link: string;
};

export default function ContactSocial({ src, alt, link }: ContactSocialProps) {
  return (
    <Link
      href={link}
      className="bg-[#292E361A] rounded-full hover:bg-[#E1B168] dur-200"
    >
      <Image src={src} alt={alt} className="m-[18px]" />
    </Link>
  );
}
