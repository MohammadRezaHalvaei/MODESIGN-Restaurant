import Image from "next/image";
import Slider from "./Slider";

export default function Testimonial() {
  return (
    <section className="bg-[#292E36] min-w-full">
      <article className="pt-[90px] pb-[150px] flex flex-col gap-[50px] max-w-[1378px] mx-auto">
        <div className="flex flex-col gap-5 text-white px-5">
          <p
            className="font-josephin font-medium text-[15px] w-fit
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5"
          >
            T E S T I M O N I A L
          </p>

          <h4 className="h4-title">What our clients say</h4>

          <p className="parag">
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </p>
        </div>
        <Slider />
      </article>
    </section>
  );
}
