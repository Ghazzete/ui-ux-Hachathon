import React from "react";
import Image from "next/image";

function Products() {
  return (
    <div className="mt-14 w-full px-4 md:px-8 lg:px-12 overflow-hidden">
      
      {/* Title Section */}
      <div className="flex justify-center items-center flex-col text-center">
        <h1 className="font-bold lg:text-[40px] md:text-[34px] text-xl">
        Our Products
        </h1>   
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 justify-items-center">
        {/* Item 1 */}
        <div className="relative flex flex-col  w-[285px] h-[446px] bg-[#F4F5F7]">
  {/* Image */}
  <Image
    src={"/card1.svg"}
    alt="img"
    width={285}
    height={301}
    className="w-full max-w-auto h-auto"
  />

  {/* Discount Circle */}
  <div className="absolute top-4 right-4 bg-[#E97171] text-white text-sm font-bold w-[48px] h-[48px] flex items-center justify-center rounded-full shadow-lg">
    -30%
  </div>

  {/* Text Content */}
  <h1 className="px-2 font-semibold mt-3">Syltherine</h1>
  <p className="px-2 font-medium text-[#898989] mt-3">Stylish cafe chair</p>
  <p className="px-2 font-semibold text-[20px] mt-3">
    Rp 2.500.000
    <span className="line-through text-[#898989] ml-2">Rp 3.500.000</span>
  </p>
</div>

        
        <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
  {/* Image */}
  <Image
    src={"/card2.svg"}
    alt="img"
    width={285}
    height={301}
    className="w-full max-w-auto h-auto"
  />

  {/* Text Content */}
  <h1 className="px-2 font-semibold mt-3">Syltherine</h1>
  <p className="px-2 font-medium text-[#898989] mt-3">Stylish cafe chair</p>
  <p className="px-2 font-semibold text-[20px] mt-3">
    Rp 2.500.000
    <span className="line-through text-[#898989] ml-2">Rp 3.500.000</span>
  </p>
</div>


        {/* Item 3 */}
        <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
  {/* Image */}
  <Image
    src={"/card3.svg"}
    alt="img"
    width={285}
    height={301}
    className="w-full max-w-auto h-auto"
  />

  {/* Discount Circle */}
  <div className="absolute top-4 right-4 bg-[#E97171] text-white text-sm font-bold w-[48px] h-[48px] flex items-center justify-center rounded-full shadow-lg">
    -50%
  </div>

  {/* Text Content */}
  <h1 className="px-2 font-semibold mt-3">Lolito</h1>
  <p className="px-2 font-medium text-[#898989] mt-3">Luxury big sofa</p>
  <p className="px-2 font-semibold text-[20px] mt-3">
  Rp 7.000.000
    <span className="line-through text-[#898989] ml-2">Rp 14.000.000</span>
  </p>
</div>

        {/* Item 4 */}
        <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
  {/* Image */}
  <Image
    src={"/card4.svg"}
    alt="img"
    width={285}
    height={301}
    className="w-full max-w-auto h-auto"
  />

  {/* Discount Circle */}
  <div className="absolute top-4 right-4 bg-[#2EC1AC] text-white text-sm font-bold w-[48px] h-[48px] flex items-center justify-center rounded-full shadow-lg">
    New
  </div>

  {/* Text Content */}
  <h1 className="px-2 font-semibold mt-3">Respira</h1>
  <p className="px-2 font-medium text-[#898989] mt-3">Outdoor bar table and stool</p>
  <p className="px-2 font-semibold text-[20px] mt-3">
  Rp 500.000
  </p>
</div>

        {/* Item 5 */}
        <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
  {/* Image */}
  <Image
    src={"/card5.svg"}
    alt="img"
    width={285}
    height={301}
    className="w-full max-w-auto h-auto"
  />

  {/* Discount Circle */}
  <div className="absolute top-4 right-4 bg-[#E97171] text-white text-sm font-bold w-[48px] h-[48px] flex items-center justify-center rounded-full shadow-lg">
    -30%
  </div>

  {/* Text Content */}
  <h1 className="px-2 font-semibold mt-3">Grifo</h1>
  <p className="px-2 font-medium text-[#898989] mt-3">Night lamp</p>
  <p className="px-2 font-semibold text-[20px] mt-3"></p>
  Rp 1.500.000
    
</div>

        {/* Item 6 */}
        <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
  {/* Image */}
  <Image
    src={"/card6.svg"}
    alt="img"
    width={285}
    height={301}
    className=" w-auto h-auto"
  />

  {/* Discount Circle */}
  <div className="absolute top-4 right-4 bg-[#2EC1AC] text-white text-sm font-bold w-[48px] h-[48px] flex items-center justify-center rounded-full shadow-lg">
    New
  </div>

  {/* Text Content */}
  <h1 className="px-2 font-semibold mt-3">Muggo</h1>
  <p className="px-2 font-medium text-[#898989] mt-3">Small mug</p>
  <p className="px-2 font-semibold text-[20px] mt-3"></p>
  Rp 150.000
    
</div>

        {/* Item 7 */}
        <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
  {/* Image */}
  <Image
    src={"/card7.svg"}
    alt="img"
    width={285}
    height={301}
    className="w-full max-w-auto h-auto"
  />

  {/* Discount Circle */}
  <div className="absolute top-4 right-4 bg-[#E97171] text-white text-sm font-bold w-[48px] h-[48px] flex items-center justify-center rounded-full shadow-lg">
    -50%
  </div>

  {/* Text Content */}
  <h1 className="px-2 font-semibold mt-3">Pingky</h1>
  <p className="px-2 font-medium text-[#898989] mt-3">Cute bed set</p>
  <p className="px-2 font-semibold text-[20px] mt-3">
  Rp 7.000.000
    <span className="line-through text-[#898989] ml-2">Rp 14.000.000</span>
  </p>
</div>

        {/* Item 8 */}
        <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
  {/* Image */}
  <Image
    src={"/card8.svg"}
    alt="img"
    width={285}
    height={301}
    className="w-full max-w-[auto] h-auto"
  />

  {/* Discount Circle */}
  <div className="absolute top-4 right-4 bg-#2EC1AC] text-white text-sm font-bold w-[48px] h-[48px] flex items-center justify-center rounded-full shadow-lg">
    New
  </div>

  {/* Text Content */}
  <h1 className="px-2 font-semibold mt-3">Potty</h1>
  <p className="px-2 font-medium text-[#898989] mt-3">Minimalist flower pot</p>
  <p className="px-2 font-semibold text-[20px] mt-3">
  Rp 500.000</p>
    
</div> 
      </div>
      <div className="py-6 flex justify-center">
        <button className="w-[245px] h-[48px]  border-2 border-red-700 text-[#B88E2F]">Show more</button>
      </div>
      </div>
      

   
  );
}

export default Products;
