import Image from "next/image";
import G1Svg from "@/Public/g1.svg";
import G2Svg from "@/Public/g2.svg";
import G3Svg from "@/Public/g3.svg";
import G4Svg from "@/Public/g4.svg";
import G5Svg from "@/Public/g5.svg";
import G6Svg from "@/Public/g6.svg";

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h3 className="text-[20px] font-semibold text-center mb-4 text-[#616161]">
        Share your setup with
      </h3>
      <h1 className="font-bold text-[40px] text-center">#FuniroFurniture</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        <div className="relative">
          <Image
            src={G1Svg}
            alt="Image 1"
            width={451}
            height={300}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={G2Svg}
            alt="Image 2"
            width={295}
            height={392}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={G3Svg}
            alt="Image 3"
            width={290}
            height={348}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={G4Svg}
            alt="Image 4"
            width={212}
            height={433}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={G5Svg}
            alt="Image 5"
            width={170}
            height={323}
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src={G6Svg}
            alt="Image 6"
            width={344}
            height={242}
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;