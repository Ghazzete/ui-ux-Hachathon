import HeroBg from "@/Public/bg.svg"
export default function Hero() {
  return (
    <div
      id="hero"
      className="relative min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      {/* Right Section at the Bottom */}
      <div className="absolute bottom-4 right-4 bg-[#FFF3E3] p-4 md:p-6 shadow-lg rounded-lg w-[90%] sm:w-[80%] md:w-[60%] lg:max-w-[643px] h-auto lg:h-[443px]">
        <p className="mt-4 text-[#000] font-semibold text-base md:text-lg lg:text-2xl">
          New Arrival
        </p>
        <h1 className="mt-4 text-[24px] md:text-[36px] lg:text-[52px] font-bold text-[#B88E2F]">
          Discover Our
        </h1>
        <h1 className="md:pt-2 text-[24px] md:text-[36px] lg:text-[52px] font-bold text-[#B88E2F]">
          New Collection
        </h1>
        <p className="mt-4 text-[#000] font-medium text-sm md:text-base lg:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="h-[50px] md:h-[60px] lg:h-[74px] w-full max-w-[222px] mt-6 px-6 py-3 bg-[#B88E2F] text-white text-sm md:text-base lg:text-lg rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}
