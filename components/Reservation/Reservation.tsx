import Image from "next/image";
import HorizontalAnimation from "../Animations/HorizontalAnimation";
import OpacityAnimation from "../Animations/OpacityAnimation";

import reserve from "@/public/reservation/reserved.jpg";

export default function Reservation() {
  return (
    <section
      className="py-[200px] max-w-[1378px] mx-auto grid grid-cols-2 items-center gap-10 justify-items-center mb-3.5 px-10
      max-lg:py-20 max-sm:pb-0 max-lg:grid-cols-1 max-lg:gap-20 max-md:px-6"
    >
      <HorizontalAnimation delay={0.2} xAxis={-100}>
        <div className="flex flex-col gap-5 text-[#292E36] mb-3.5">
          <p
            className="font-josephin font-medium text-[15px] w-fit 
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
          >
            RESERVATION
          </p>

          <h4 className="h4-title">Book your table now</h4>
        </div>
        <p className="parag text-[#555555] mb-[26px]">
          The people, food and the prime locations make Rodich the perfect place
          good friends & family to come together and have great time.
        </p>

        <div className="grid grid-cols-2 gap-x-7 gap-y-9 mb-12 max-md:grid-cols-1">
          <input type="text" className="input-style-white" placeholder="Name" />
          <input
            type="email"
            className="input-style-white"
            placeholder="Email"
          />
          <input
            type="text"
            className="input-style-white"
            placeholder="Phone"
          />
          <input
            type="text"
            className="input-style-white"
            placeholder="Date"
            defaultValue={new Date().toISOString().substring(0, 10)}
          />
          <input type="text" className="input-style-white" placeholder="Time" />
          <input
            type="text"
            className="input-style-white"
            placeholder="Person"
          />
        </div>

        <button
          className="mx-auto btn-white w-fitborder-transparent
        text-[#E1B168] py-5 px-12 text-[22px] leading-[27.83px]"
        >
          Book a Table
        </button>
      </HorizontalAnimation>

      <OpacityAnimation delay={0.2}>
        <Image src={reserve} alt="Reserved" className="max-lg:w-full" />
      </OpacityAnimation>
    </section>
  );
}
