import React from 'react';

function Footer() {
  return (
    <div className="w-full  py-10 px-4 md:px-16">
      <div className="flex flex-col md:flex-row justify-between gap-8 border-b-2">
        <div className="w-full md:w-1/5">
          <h2 className="text-2xl font-bold mb-8 ">Furniro.</h2>
          <p className="text-lg text-[#9F9F9F]">
          400 University Drive Suite 200 Coral Gables,
          FL 33134 USA
          </p>

          
        </div>

        <div className="w-full md:w-1/5">
          <p className=" mb-8 font-medium text-[#9F9F9F]">Links</p>
          <h1 className="font-medium mb-8">Home</h1>
          <h1 className="font-medium mb-8">Shop</h1>
          <h1 className="font-medium mb-8">About</h1>
          <h1 className="font-medium mb-8">Contact</h1>
        </div>

        <div className="w-full md:w-1/5">
        <p className=" mb-8 font-medium text-[#9F9F9F]">Help</p>
          <h1 className="font-medium mb-8">Payment Options</h1>
          <h1 className="font-medium mb-8">Returns</h1>
          <h1 className="font-medium mb-8">Privacy Policies</h1>
        </div>

        <div className="w-full md:w-1/5">
  <p className="mb-8 font-medium text-[#9F9F9F]">Newsletter</p>
  <div className="flex space-x-2 w-full ">
  <input
    type="email"
    placeholder="Enter Your Email Address"
    className="border-b-2 border-black text-[#9F9F9F] p-2 flex-grow"
  />
</div>

  </div>
 
</div>

<div className=" py-4 mt-4">
  <p>2023 Furino. All rights reserved</p>
</div>

       
      </div>
  );
}

export default Footer;
