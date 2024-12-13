import React from "react";
import Image from "next/image";
import Section1 from "@/Public/section1.svg"
import Section2 from "@/Public/section2.svg"

export default function Section() {
  return (
    <section className="w-full bg-[#FFF8F2] py-12 px-4 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text[#3A3A3A] leading-snug">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-[#616161] mt-4 text-base md:text-lg">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="bg-[#B88E2F] text-white font-medium px-6 py-3 rounded-md mt-6 hover:bg-[#b49263] transition">
            Explore More
          </button>
        </div>

        <div className="lg:w-1/2 flex gap-6 items-center relative">
          {/* First Image */}
          <div className="w-[300px] h-[400px] flex-shrink-0 overflow-hidden rounded-md shadow-lg">
            <Image
              src={Section1}
              alt="Bedroom Inspiration"
              width={404}
              height={582}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-md shadow-md">
              <p className="font-medium text-xs text-[#616161]">01 — Bed Room</p>
              <p className="text-[28px] text-[#3A3A3A] font-semibold">Inner Peace</p>
            </div>
          </div>

          {/* Second Image */}
          <div className="w-[300px] h-[400px] flex-shrink-0 overflow-hidden rounded-md shadow-lg hidden md:block">
            <Image
              src={Section2}
              alt="Living Room Inspiration"
              width={372}
              height={486}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}