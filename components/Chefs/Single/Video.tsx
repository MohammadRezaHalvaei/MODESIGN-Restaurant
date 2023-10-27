"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import VerticalAnimation from "@/components/Animations/VerticalAnimation";

import play from "@/public/chefs/single/video/play.svg";
import poster from "@/public/chefs/single/video/video.jpg";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirstPlay, setIsFirstPlay] = useState(false);

  const handlePlay = () => {
    videoRef.current!.play();
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setIsFirstPlay(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="bg-[#292E36] text-white mb-[360px] relative flex flex-col items-center">
      <div className="flex flex-col gap-4 items-center pt-[100px] pb-[440px]">
        <p
          className="font-josephin font-medium text-[15px] w-fit 
            leading-[11.57px] border-t border-b border-[#E1B168] py-1.5 tracking-[0.2em]"
        >
          PROMO
        </p>

        <h4 className="h4-title">My Promo Video</h4>
      </div>
      <div
        className="absolute -bottom-40
        w-[900px] h-[527px] flex items-center justify-center"
      >
        <VerticalAnimation delay={0.1} className="relative group">
          <button
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
            border rounded-full pt-8 pb-8 pr-9 pl-9 hover:bg-[#E1B168] dur-200 
            hover:border-transparent ${isPlaying ? "hidden" : ""}`}
            onClick={handlePlay}
          >
            <Image src={play} alt="Play Button" />
          </button>
          {isFirstPlay || (
            <Image
              src={poster}
              alt="Poster"
              className="absolute top-0 h-full"
            />
          )}
          <video
            ref={videoRef}
            controls
            onPlay={handleVideoPlay}
            onPause={handlePause}
          >
            <source src="/chefs/single/video/video.mp4" />
          </video>
        </VerticalAnimation>
      </div>
    </section>
  );
}
