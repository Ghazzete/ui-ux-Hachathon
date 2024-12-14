import Image from "next/image";
import Phone from "@/public/phone.svg";
import clock from "@/public/clock.svg";
import customer from "@/public/customer-support.svg";
import guarantee from "@/public/guarantee.svg";
import trophy from "@/public/trophy 1.svg";
import shipping from "@/public/shipping.svg";

import icon from "@/public/icon.svg"
import address from "@/public/address.svg"

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[316px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.svg')" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-[48px] font-medium text-[#000000]">Contact</h1>
          <div className="flex items-center mt-2">
            <h2 className="text-[#000000] font-medium">Home</h2>
            <span className=" mx-2">
              <Image src={icon} alt="icon" height={8} width={14} /></span>
            <p className="text-[#000000] font-light">Contact</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-8 px-4 py-12 ">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Get In Touch With Us
        </h2>
        <p className="text-center text-[#9F9F9F] w-[644px] mx-auto mb-12">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col space-y-8 lg:w-1/3">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-yellow-500">
                <Image src={address} alt="icon" height={27} width={22} />
                </span>
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-yellow-500">
              <Image src={Phone} alt="icon" height={27} width={22} />
              </span>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-600">
                  Mobile: (+84) 546-6789
                  <br />
                  Hotline: (+84) 456-6789
                </p>
              </div>
            </div>
            {/* Working Time */}
            <div className="flex items-start space-x-4">
              <span>
              <Image src={clock} alt="icon" height={27} width={22} />
              </span>
              <div>
                <h3 className="text-lg font-medium">Working Time</h3>
                <p className="text-gray-600">
                  Monday-Friday: 8:00 - 20:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="abc@def.com"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
                />
              </div>
              <div className="flex flex-col sm:col-span-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
                />
              </div>
              <div className="flex flex-col sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I’d like to ask about..."
                  rows={4}
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-300"
                ></textarea>
              </div>
              <div className="sm:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-[237px] h-[55px] bg-[#B88E2F] text-[#FFFFFF] py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
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
