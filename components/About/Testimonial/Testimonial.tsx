import Image from "next/image";
import br from "@/public/about/testimonial/“.svg";
import TestiSlider from "./TestiSlider";

export default function Testimonial() {
  return (
    <section className="bg-[#292E36] py-36 text-white flex flex-col items-center max-lg:py-[80px]">
      <article className="flex flex-col items-center max-w-[1138px]">
        <p
          className="font-josephin font-medium text-[15px] w-fit mb-4
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
        >
          TESTIMONIAL
        </p>

        <h4 className="h4-title mb-11 max-lg:text-3xl max-lg:mb-6">
          What Our Clients Say
        </h4>

        <Image src={br} alt="''" className="mb-[38px]" />

        <TestiSlider />
      </article>
    </section>
  );
}
