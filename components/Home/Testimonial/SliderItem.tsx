import Image, { StaticImageData } from "next/image";

type SliderItemProps = {
  src: StaticImageData;
  alt: string;
  title: string;
  city: string;
};

export default function SliderItem({ src, alt, title, city }: SliderItemProps) {
  return (
    <div className="bg-[#343942] py-14 px-11 max-md:py-10 max-md:px-8">
      <div className="flex gap-4 pb-8 border-b border-[#797E89] items-center max-md:pb-4">
        <Image src={src} alt={alt} className="max-w-[114px] max-h-[114px]" />
        <div className="flex flex-col gap-4 text-white py-6 max-md:gap-2 max-md:py-0">
          <h5 className="h5-title max-md:text-xl">{title}</h5>
          <p className="parag text-[#E1B168] max-md:text-lg">{city}</p>
        </div>
      </div>
      <p className="font-cormorant font-normal text-white text-2xl leading-[36.62px] italic mt-6 max-md:text-xl max-md:mt-3">
        &quot;It is professional, considers everyone&apos;s time, can think
        about the There are many variations of passages whole probls small
        niche, friendly.
      </p>
    </div>
  );
}
