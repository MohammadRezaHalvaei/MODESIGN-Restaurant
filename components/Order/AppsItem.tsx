import Image, { StaticImageData } from "next/image";
import { Link } from "nextjs13-progress";

type AppItemsProps = {
  src: StaticImageData;
  alt: string;
};

export default function AppsItem({ src, alt }: AppItemsProps) {
  return (
    <div>
      <div className="border-[1.5px] border-[#DCDCDC] rounded-2xl w-full flex h-[136px] px-[40px] py-[30px]">
        <Image src={src} alt={alt} />
      </div>
    </div>
  );
}
