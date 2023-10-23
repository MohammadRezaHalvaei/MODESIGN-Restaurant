"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./slide.css";

import Image from "next/image";
import daniyal from "@/public/home/testimonial/Daniyal.png";
import natasha from "@/public/home/testimonial/Natasha.png";
import jack from "@/public/home/testimonial/Jack.png";

const swiperStyle =
  "px-[160px] font-cormorant text-[25px] leading-[36.62px] italic font-normal mb-9 text-center";

const slides = [
  { src: daniyal, name: "Daniyal Sppra", role: "Designer" },
  { src: natasha, name: "Natasha D", role: "Programmer" },
  { src: jack, name: "Jack Sparrow", role: "Engineer" },
];

export default function TestiSlider() {
  return (
    <div className="w-full max-lg:max-w-[800px] max-sm:max-w-[400px] ">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {slides.map((slide) => (
          <SwiperSlide key={slide.name}>
            <p
              className={`${swiperStyle} max-lg:text-xl max-sm:text-lg max-sm:px-10`}
            >
              &quot;Leverage agile frameworks to provide a robust synopsis for
              high level overviews. Iterative approaches to corporate strategy
              foster collaborative thinking further overall value proposition
              organicallfriendly.
            </p>

            <div className="flex flex-col items-center">
              <Image src={slide.src} alt={slide.name} className="mb-5" />
              <h5 className="h5-title mb-4">{slide.name}</h5>
              <p className="parag text-[#E1B168]">{slide.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
