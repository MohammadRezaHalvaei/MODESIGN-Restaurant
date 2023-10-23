import Image, { StaticImageData } from "next/image";

type ChooseItemProps = {
  src: StaticImageData;
  title: string;
};

export default function ChooseItem({ src, title }: ChooseItemProps) {
  return (
    <div className="py-5 pl-6 border-2 border-[#EAEAEA] flex gap-2.5 items-center">
      <Image src={src} alt={title} />
      <p
        className="font-josephin text-[22px] leading-[27.83px] font-medium text-[#292E36]
      max-xl:text-base"
      >
        {title}
      </p>
    </div>
  );
}
