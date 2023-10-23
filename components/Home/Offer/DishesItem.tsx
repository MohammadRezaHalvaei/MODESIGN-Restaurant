import Image, { StaticImageData } from "next/image";

type DishesItemProps = {
  src: StaticImageData;
};

export default function DishesItem({ src }: DishesItemProps) {
  return (
    <div className="max-w-[321px] max-md:max-w-full">
      <Image src={src} alt="Chicken Manjoori" className="w-full" />
      <div className="flex justify-between h5-title py-4 border-b border-[#DCDCDC] max-md:py-3 max-sm:text-2xl">
        <h5>Chicken Manjoori</h5>
        <h5>$15</h5>
      </div>
      <p className="parag mt-4 max-sm:text-base max-sm:mt-2">
        Lorem Ipsum is that it has a more-or-less normal
      </p>
    </div>
  );
}
