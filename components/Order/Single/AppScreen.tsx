import Image from "next/image";
import YAnimation from "@/components/Animations/YAnimation";

import appOne from "@/public/order/single/app-1.png";
import appTwo from "@/public/order/single/app-2.png";
import appThree from "@/public/order/single/app-3.png";

const images = [
  { src: appOne, alt: "App one" },
  { src: appTwo, alt: "App Two" },
  { src: appThree, alt: "App Three" },
];

export default function AppScreen() {
  return (
    <section className="bg-[#292E36]">
      <div className="max-w-[1378px] py-[200px] mx-auto text-white text-center px-10 max-lg:py-20">
        <div className="max-w-[700px] mx-auto">
          <h4 className="h4-title mb-[22px] max-md:text-3xl">
            A Simple Way to Order your Food
          </h4>
          <p className="parag mb-10 max-md:text-base">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using &apos;Content here, content making.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12 max-md:grid-cols-1">
          {images.map((image, index) => (
            <YAnimation delay={index * 0.2} key={image.alt}>
              <Image
                src={image.src}
                alt={image.alt}
                className="max-md:w-full"
              />
            </YAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
