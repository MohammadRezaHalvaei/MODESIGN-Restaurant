"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import daniyalImg from "@/public/home/testimonial/Daniyal.png";
import NatashaImg from "@/public/home/testimonial/Natasha.png";
import jackImg from "@/public/home/testimonial/Jack.png";
import SliderItem from "./SliderItem";

const persons = [
  {
    src: daniyalImg,
    alt: "Daniyal",
    title: "Daniyal Sppra",
    city: "Newyork",
  },
  {
    src: NatashaImg,
    alt: "Natasha",
    title: "Natasha D",
    city: "Salt Lake City",
  },
  {
    src: jackImg,
    alt: "Jack",
    title: "Jack Sparrow",
    city: "San Diego",
  },
  {
    src: daniyalImg,
    alt: "Daniyal2",
    title: "Daniyal Sppra",
    city: "Newyork",
  },
  {
    src: NatashaImg,
    alt: "Natasha2",
    title: "Natasha D",
    city: "Salt Lake City",
  },
  {
    src: jackImg,
    alt: "Jack2",
    title: "Jack Sparrow",
    city: "San Diego",
  },
];

export default function Slider() {
  const [windowWidth, setWindowWidth] = useState(() => {
    // Check if we're running on the client side
    if (typeof window !== "undefined") {
      return window.innerWidth;
    } else {
      // Set a default width if not running on the client side
      return 0;
    }
  });

  useEffect(() => {
    // Check if we're running on the client side
    if (typeof window !== "undefined") {
      // Update the window width when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Add an event listener to the window to track window resize
      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <article className="h-fit px-5 relative">
      <Swiper
        slidesPerView={windowWidth > 1410 ? 3 : windowWidth > 1000 ? 2 : 1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {persons.map((person) => (
          <SwiperSlide key={person.alt}>
            <SliderItem
              key={person.alt}
              alt={person.alt}
              src={person.src}
              title={person.title}
              city={person.city}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}
