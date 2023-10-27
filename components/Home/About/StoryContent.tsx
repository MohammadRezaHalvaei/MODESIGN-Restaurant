import HorizontalAnimation from "@/components/Animations/HorizontalAnimation";
import VerticalAnimation from "@/components/Animations/VerticalAnimation";

export default function StoryContent() {
  return (
    <div
      className="flex flex-col gap-9 xl:max-w-[640px] max-xl:px-28 max-lg:px-20 max-sm:px-10 
    xl:pl-14 xl:border-l xl:border-[#B29A90] max-xl:mx-auto"
    >
      <div className="flex flex-col gap-5">
        <h4 className="h4-title max-sm:text-3xl">The Story</h4>
        <p className="parag max-sm:text-base">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &apos;Content here, content
          gfshere&apos;, makinlook like readable English. Many desktop
          publishing packages.
        </p>
      </div>

      <div className="flex gap-10 max-sm:gap-5">
        {["1996", "2021"].map((year, index) => (
          <HorizontalAnimation
            delay={index * 0.1}
            key={year}
            className="flex flex-col gap-5 max-sm:gap-2"
          >
            <h4 className="h4-title max-sm:text-3xl">{year}</h4>
            <p className="parag max-sm:text-base">
              Lorem Ipsum is that it has a more-or-less normal distribution
            </p>
          </HorizontalAnimation>
        ))}
      </div>

      <VerticalAnimation delay={0.3} className="flex flex-col gap-8">
        <p className="parag max-sm:text-base">JOSEFINE</p>
        <p className="font-cervantis text-5xl leading-[63.25px] text-[#292E36] max-sm:text-4xl">
          Josefine
        </p>
      </VerticalAnimation>
    </div>
  );
}
