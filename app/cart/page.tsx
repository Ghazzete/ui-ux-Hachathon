import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo1 from '@/public/Logo1.svg'
import icon from '@/public/icon.svg'
import sofa from '@/public/sofa.svg'

function page() {
  return (   
        <div className=" px-4 py-8">

    <div
      id="hero"
      className="relative h-[316px] w-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/Rectangle 1.svg')" }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0">
      <Image
          src={logo1}
          alt="logo"
          height={32}
          width={50}
          className="object-contain"
        />
        <h1 className="text-[48px] font-medium text-[#000000]">Cart</h1>
        <div className="flex flex-row items-center">
          <h2 className="font-medium text-[#000000] flex items-center">
            Home
            <span className="ml-2">
              <Image src={icon} alt="icon" height={8} width={14} />
            </span>
          </h2>
          <p className="font-light text-[#000000] ml-2">Cart</p>
        </div>
      </div>
    </div>
    <div className="mt-14 px-4">
        
    <div className="flex flex-col md:flex-row">
  {/* Left Section - 60% */}
  <div className="w-full md:w-[60%]">
    <div className="flex bg-[#F9F1E7] h-[55px] w-full items-center justify-between px-4 md:px-20 gap-4">
      <h2 className="font-medium text-[#000000]">Product</h2>
      <h2 className="font-medium text-[#000000]">Price</h2>
      <h2 className="font-medium text-[#000000]">Quantity</h2>
      <h2 className="font-medium text-[#000000]">Subtotal</h2>
    </div>
    <div className="mt-8 flex items-center gap-4">
      <Image src={sofa} alt="icon" height={90} width={111} />
      <p className="text-[#9F9F9F] mx-4">Asgaard sofa</p>
      <p className="text-[#9F9F9F] mx-4">Rs. 250,000.00</p>
      <button className="h-[32px] w-[32px] border border-[#9F9F9F] rounded-md">
        1
      </button>
      <p className="text-[#000000] mx-4">Asgaard sofa</p>
    </div>
  </div>

  {/* Right Section - 40% */}
  <div className="bg-[#F9F1E7] h-auto md:h-[390px] md:w-[40%] p-6 ml-16 flex flex-col items-center mt-10 lg:mt-0">
  {/* Title */}
  <h1 className="font-semibold text-[32px] mb-6">Cart Totals</h1>
  
  {/* Content Section */}
  <div className="flex flex-col w-full">
    <div className="flex flex-row justify-center items-center gap-6 mt-6">
      <h1 className="font-medium text-[#000]">Subtotal</h1>
      <p className="text-[#9F9F9F]">Rs. 250,000.00</p>
    </div>
    <div className="flex flex-row justify-center items-center gap-6 mt-6">
      <h1 className="font-medium text-[#000]">Total</h1>
      <p className="text-[#B88E2F]">Rs. 250,000.00</p>
    </div>
    <div className="flex flex-row justify-center items-center gap-6 mt-6">
      <Link href="/checkout">
    <button className='h-[58px] w-[222px] border rounded-md border-[#000]'>Check Out</button>
    </Link>
    </div>
    </div>
  </div>
</div>

</div>
</div>


  )
}

export default page