import React from "react";
import { cinzelFont } from "@/app/fonts";

const Hero = () => {
  return (
    <div className="w-full pt-[10vh] md:pt-[12vh] h-screen bg-black overflow-hidden relative bg-[url('/images/hero-5.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className={`flex justify-center items-center flex-col text-center w-[92%] sm:w-[80%] h-full mx-auto relative z-10 ${cinzelFont.className}`}>
        {/* Overline */}
        <p className="uppercase tracking-[0.35em] text-xs sm:text-sm bg-linear-to-r from-[#C9A227] via-[#F2D675] to-[#B8860B] bg-clip-text text-transparent"
            style={{
                textShadow:
                  "0 0 10px rgba(255, 200, 80, 0.18), 0 0 18px rgba(255, 200, 80, 0.10)",
              }}>
          Welcome to Puerta Norte
        </p>

        {/* Headline */}
        <h1 className="bg-linear-to-r from-[#C9A227] via-[#F2D675] to-[#B8860B] bg-clip-text text-transparent mt-4 font-bold tracking-wide leading-tight text-3xl sm:text-5xl md:text-6xl"
            style={{
              textShadow:
                "0 0 14px rgba(255, 200, 80, 0.25), 0 0 30px rgba(255, 200, 80, 0.15)",
            }}
            >
          Open Doors, <span className="block">Close With Confidence.</span>
        </h1>

        {/* Body */}
        <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed 
            bg-linear-to-r from-[#C9A227] via-[#F2D675] to-[#B8860B] bg-clip-text text-transparent"
            style={{
                textShadow:
                  "0 0 10px rgba(255, 200, 80, 0.18), 0 0 18px rgba(255, 200, 80, 0.10)",
              }}>
          Curated properties in prime locations. Buy, sell, or rent with a team that guides you from the first visit to the final signature.
        </p>
      </div>
    </div>
  );
};

export default Hero;
