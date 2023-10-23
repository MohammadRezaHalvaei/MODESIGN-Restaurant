import Image, { StaticImageData } from "next/image";

type ContactItemProps = {
  src: StaticImageData;
  alt: string;
  title: string;
  text: string;
};

export default function ContactItem({
  src,
  alt,
  title,
  text,
}: ContactItemProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-[#292E36] min-w-[80px] min-h-[80px] rounded-full flex justify-center items-center">
        <Image src={src} alt={alt} />
      </div>
      <div className="py-3 text-[#292E36]">
        <h5 className="h5-title mb-4">{title}</h5>
        <p className="parag">{text}</p>
      </div>
    </div>
  );
}
