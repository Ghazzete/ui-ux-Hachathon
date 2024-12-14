import React from "react";
import Image from "next/image";
import Image1 from "@/public/image 1.svg"
import Image2 from "@/public/image 2.svg"
import Image3 from "@/public/image 3.svg"

function Features() {
  return (
    <div className="mt-10 w-full overflow-hidden">
      {/* Title Section */}
      <div className="flex justify-center items-center flex-col text-center">
        <h1 className="font-bold lg:text-[32px] md:text-[24px] text-xl">
          Browse The Range
        </h1>
        <p className="text-[#666666] md:text-[20px] text-base mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <Image
            src={Image1}
            alt="image"
            width={300}
            height={380}
            className="w-full max-w-[381px] h-auto"
          />
          <h1 className="text-center font-semibold text-[24px] mt-4">Dining</h1>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <Image
            src={Image2}
            alt="image"
            width={300}
            height={380}
            className="w-full max-w-[381px] h-auto"
          />
          <h1 className="text-center mt-4 font-semibold text-[24px]">Living Room</h1>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <Image
            src={Image3}
            alt="image"
            width={300}
            height={380}
            className="w-full max-w-[381px] h-auto"
          />
          <h1 className="text-center mt-4 font-semibold text-[24px]">Bedroom</h1>
        </div>
      </div>
    </div>
  );
}

export default Features;