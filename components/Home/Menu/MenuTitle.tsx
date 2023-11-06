import Image from "next/image";
import menuImage from "@/public/home/Menu.jpg";
import { Link } from "nextjs13-progress";
import OpacityAnimation from "@/components/Animations/OpacityAnimation";
import VerticalAnimation from "@/components/Animations/VerticalAnimation";

export default function MenuTitle() {
  return (
    <article
      className={`flex flex-col gap-[60px] max-sm:gap-8 lg:sticky top-[4%] h-fit px-4`}
    >
      <VerticalAnimation
        delay={0}
        className="flex flex-col gap-[22px] max-lg:text-center max-lg:px-6"
      >
        <div className="flex flex-col gap-3">
          <p
            className="font-josephin font-medium text-[15px] w-fit max-lg:mx-auto
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5"
          >
            M E N U
          </p>
          <h4 className="h4-title leading-10 max-sm:text-3xl">
            Try Our Special Offers
          </h4>
        </div>
        <p className="parag text-[#555555] max-sm:text-base">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content making it
          look like readable English.
        </p>
      </VerticalAnimation>
      <OpacityAnimation delay={0} className="flex justify-center">
        <Image src={menuImage} alt="menu" className="max-lg:w-[80%]" />
      </OpacityAnimation>

      <Link href="/menu" className="max-lg:mx-auto">
        <VerticalAnimation
          delay={0}
          className="btn-white text-[#E1B168] font-josephin 
          text-[22px] leading-[27.83px] px-12 py-5 w-fit"
        >
          See all dishes
        </VerticalAnimation>
      </Link>
    </article>
  );
}
