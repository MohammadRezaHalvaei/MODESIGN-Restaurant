import Image, { StaticImageData } from "next/image";

type ServicesItemProps = {
  src: StaticImageData;
  title: string;
};

export default function ServicesItem({ src, title }: ServicesItemProps) {
  return (
    <div className="bg-[#323841] overflow-hidden">
      <div className="bg-[#292E36] m-[22px] p-[42px] flex flex-col items-center dur-200  hover:scale-110 overflow-hidden">
        <Image src={src} alt={title} />
        <h6 className="h6-title leading-[29.9px] text-white mt-[18px]">
          {title}
        </h6>
      </div>
    </div>
  );
}
