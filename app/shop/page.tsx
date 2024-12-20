import React from 'react';
import Image from 'next/image';
import card1 from "@/public/card (1).svg"
import card2 from "@/public/card (2).svg"
import card3 from "@/public/card (3).svg"
import card4 from "@/public/card (4).svg"
import customer from "@/public/customer-support.svg";
import guarantee from "@/public/guarantee.svg";
import trophy from "@/public/trophy 1.svg";
import shipping from "@/public/shipping.svg";

function ShopePage() {
  return (
    <div>
    <div
      id="hero"
      className="relative h-[316px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/Rectangle 1.svg')" }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0">
  <div>
    <h1 className="text-[48px] font-medium text-[#000000]">Shop</h1>
  </div>
  <div className="flex flex-row items-center">
    <h2 className="font-medium text-[#000000] flex items-center">
      Home
      <span className="ml-2">
        <Image src={'/icon.svg'} alt="icon" height={8} width={14} />
      </span>
    </h2>
    <p className='font-light text-[#000000] ml-2'>Shop</p>
  </div>
</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 gap-8 mt-8 justify-items-center">
        {/* Item 1 */}
        <div className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7]">
  {/* Image */} 
  <Image
    src={card1}
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
    src={card2}
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
    src={card3}
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
    src={card4}
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
<div className="relative flex flex-col  w-[285px] h-[446px] bg-[#F4F5F7]">
  {/* Image */} 
  <Image
    src={card1}
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
    src={card2}
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
    src={card3}
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
    src={card4}
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
<div className="relative flex flex-col  w-[285px] h-[446px] bg-[#F4F5F7]">
  {/* Image */} 
  <Image
    src={card1}
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
    src={card2}
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
    src={card3}
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
    src={card4}
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
</div>
<div className=' flex justify-center py-14 gap-4 mb-8'>
<div className='w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-md'>
  <button 
    className='w-full h-full rounded-md hover:bg-[#B88E2F] hover:text-white text-black'
  >
    1
  </button>
</div>
<div className='w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-md'>
  <button 
    className='w-full h-full rounded-md hover:bg-[#B88E2F] hover:text-white text-black'
  >
    2
  </button>
</div>
<div className='w-[60px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-md'>
  <button 
    className='w-full h-full rounded-md hover:bg-[#B88E2F] hover:text-white text-black'
  >
    3
  </button>
</div>
<div className='w-[98px] h-[60px] bg-[#F9F1E7] flex justify-center items-center rounded-md'>
  <button 
    className='w-full h-full rounded-md hover:bg-[#B88E2F] hover:text-white text-black'
  >
    Next
  </button>
</div>
</div>
<div className="h-auto mx-2 flex items-center bg-[#FAF3EA] py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
    {/* Item 1 */}
    <div className="flex flex-col items-center text-center">
      <Image src={trophy} alt="trophy" height={60} width={60} />
      <h1 className="font-semibold text-[25px] text-[#242424] mt-4">High Quality</h1>
      <p className="font-medium text-[20px] text-[#898989]">crafted from top materials</p>
    </div>

    {/* Item 2 */}
    <div className="flex flex-col items-center text-center">
      <Image src={guarantee} alt="guarantee" height={60} width={60} />
      <h1 className="font-semibold text-[25px] text-[#242424] mt-4">Warranty Protection</h1>
      <p className="font-medium text-[20px] text-[#898989]">Over 2 years</p>
    </div>

    {/* Item 3 */}
    <div className="flex flex-col items-center text-center">
      <Image src={shipping} alt="shipping" height={60} width={60} />
      <h1 className="font-semibold text-[25px] text-[#242424] mt-4">Free Shipping</h1>
      <p className="font-medium text-[20px] text-[#898989]">Order over 150 $</p>
    </div>

    {/* Item 4 */}
    <div className="flex flex-col items-center text-center">
      <Image src={customer} alt="customer support" height={60} width={60} />
      <h1 className="font-semibold text-[25px] text-[#242424] mt-4">24 / 7 Support</h1>
      <p className="font-medium text-[20px] text-[#898989]">Dedicated support</p>
    </div>
  </div>
</div>
    </div>
  );
}

export default ShopePage;
