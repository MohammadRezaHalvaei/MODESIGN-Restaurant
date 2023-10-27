import Image from "next/image";
import OpacityAnimation from "@/components/Animations/OpacityAnimation";

import imgOne from "@/public/gallery/single/01.png";
import imgTwo from "@/public/gallery/single/02.png";
import imgThree from "@/public/gallery/single/03.png";
import imgFour from "@/public/gallery/single/04.png";
import imgFifth from "@/public/gallery/single/05.png";
import imgSix from "@/public/gallery/single/06.png";

export default function InstaGallery() {
  return (
    <section className="py-[120px] max-md:py-16 px-10 max-sm:px-6">
      <div className="flex flex-col gap-5 items-center text-[#292E36] mb-14">
        <p
          className="font-josephin font-medium text-[15px] w-fit 
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
        >
          STORIES
        </p>

        <h4 className="h4-title max-sm:text-3xl">Instagram Gallery</h4>
      </div>
      <OpacityAnimation
        delay={0.6}
        className="grid grid-cols-6 justify-items-center gap-10 items-center max-w-[1600px] mx-auto
        max-lg:grid-cols-3 max-sm:grid-cols-1"
      >
        <Image src={imgOne} alt="Instagram" className="max-sm:w-full" />
        <Image src={imgTwo} alt="Instagram" className="max-sm:w-full" />
        <Image src={imgThree} alt="Instagram" className="max-sm:w-full" />
        <Image src={imgFour} alt="Instagram" className="max-sm:w-full" />
        <Image src={imgFifth} alt="Instagram" className="max-sm:w-full" />
        <Image src={imgSix} alt="Instagram" className="max-sm:w-full" />
      </OpacityAnimation>
    </section>
  );
}
