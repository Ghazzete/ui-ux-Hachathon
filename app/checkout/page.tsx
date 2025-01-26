'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import icon from '@/public/icon.svg';
import { useCart } from "@/app/cartContext";

function Page() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [orderPlaced, setOrderPlaced] = useState(false); // New state for order placement success
  const [error, setError] = useState<string | null>(null); // Error state for invalid inputs
  const { cart } = useCart(); // Assuming cart context is being used for product details

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(e.target.value);
  };

  const handlePlaceOrder = () => {
    // Validation for fields (for example, ensure payment method is selected)
    if (!selectedPayment) {
      setError("Please select a payment method.");
      return;
    }

    // Handle order placement logic here (e.g., submitting form, etc.)
    setOrderPlaced(true); // Set state to show success message
    setError(null); // Reset error state after successful order
  };

  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      {/* Hero Section */}
      <div
        id="hero"
        className="relative h-[316px] w-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.svg')" }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0">
          <Image src={"/Logo1.svg"} alt="logo" height={32} width={50} className="object-contain" />
          <h1 className="text-[48px] font-medium text-[#000000]">Checkout</h1>
          <div className="flex flex-row items-center">
            <h2 className="font-medium text-[#000000] flex items-center">
              Home
              <span className="ml-2">
                <Image src={icon} alt="icon" height={8} width={14} />
              </span>
            </h2>
            <p className="font-light text-[#000000] ml-2">Checkout</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row md:justify-between py-14 gap-6 mx-14">
        {/* Left Section: Billing Details */}
        <div className="md:w-3/5 flex flex-col items-center">
          <div className="flex justify-center w-full">
            <h1 className="font-semibold text-[#000] text-[36px]">Billing details</h1>
          </div>
          <div className="flex flex-col mt-10 gap-8">
            {/* First and Last Name */}
            <div className="flex flex-row ">
              <div className="flex flex-col ">
                <label htmlFor="firstName" className="mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter First Name"
                  className="border border-[#9F9F9F] rounded-md w-[211px] h-[75px] pl-2"
                />
              </div>
              <div className="flex flex-col ml-6">
                <label htmlFor="lastName" className="mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter Last Name"
                  className="border border-[#9F9F9F] rounded-md w-[211px] h-[75px] pl-2"
                />
              </div>
            </div>

            {/* Other Fields */}
            {[ 
              { label: "Company Name (Optional)", placeholder: "Enter Company Name" },
              { label: "Country / Region", placeholder: "Country / Region" },
              { label: "Street address", placeholder: "Street address" },
              { label: "Town / City", placeholder: "Town / City" },
              { label: "Province", placeholder: "Province" },
              { placeholder: "ZIP code" }
            ].map(({ label, placeholder }) => (
              <div key={label} className="flex flex-col">
                <label className="font-medium">{label}</label>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="border border-[#9F9F9F] rounded-md w-[453px] h-[75px] pl-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Summary and Payment */}
        <div className="md:w-2/5 flex flex-col mt-12">
          {/* Product Summary */}
          <div className="flex flex-col gap-4 border-b pb-4">
            <div className="flex flex-row justify-between">
              <h1 className="text-[24px] font-semibold">Product</h1>
              <h1 className="text-[24px] font-semibold">Subtotal</h1>
            </div>
            {/* Assuming cart items are here */}
            {cart.map(product => (
              <div key={product.id} className="flex flex-row justify-between">
                <p className="font-medium">{product.title} x {product.quantity}</p>
                <p className="font-light">${product.price * product.quantity}</p>
              </div>
            ))}
            <div className="flex flex-row justify-between">
              <h1 className="font-medium">Total</h1>
              <h1 className="font-bold text-[24px] text-[#B88E2F]">${totalAmount}</h1>
            </div>
          </div>

          {/* Payment Options */}
          <div className="flex flex-col gap-6 mt-6">
            <div>
              <input
                type="radio"
                id="directBankTransfer"
                name="paymentMethod"
                value="Direct Bank Transfer"
                onChange={handlePaymentChange}
                checked={selectedPayment === 'Direct Bank Transfer'}
                className="accent-black"
              />
              <label htmlFor="directBankTransfer" className="ml-2 font-medium text-[#000]">
                Direct Bank Transfer
              </label>
              {selectedPayment === 'Direct Bank Transfer' && (
                <p className="text-[#9F9F9F] font-light mt-2">
                  Make your payment directly into our bank account. Use your Order ID as a reference.
                </p>
              )}
            </div>
            <div>
              <input
                type="radio"
                id="cashOnDelivery"
                name="paymentMethod"
                value="Cash on Delivery"
                onChange={handlePaymentChange}
                checked={selectedPayment === 'Cash on Delivery'}
                className="accent-black"
              />
              <label htmlFor="cashOnDelivery" className="ml-2 font-medium text-[#000]">
                Cash on Delivery
              </label>
              {selectedPayment === 'Cash on Delivery' && (
                <p className="text-[#9F9F9F] font-light mt-2">
                  Pay when your order is delivered.
                </p>
              )}
            </div>
          </div>

          {/* Privacy Policy */}
          <p className="text-[#9F9F9F] font-light mt-6">
            Your personal data will be used to support your experience throughout this website.
          </p>

          {/* Error Message */}
          {error && <p className="text-red-500 mt-4">{error}</p>}

          {/* Place Order Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handlePlaceOrder}
              className="border border-[#000] h-[64px] w-full rounded-md hover:bg-black hover:text-white transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {orderPlaced && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-xl font-semibold text-green-500">Your order has been successfully placed!</h2>
            <button
              onClick={() => setOrderPlaced(false)}
              className="mt-4 px-4 py-2 bg-[#B88E2F] text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
