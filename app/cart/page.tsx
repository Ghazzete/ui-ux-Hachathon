"use client";
import { useCart } from "@/app/cartContext";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [error, setError] = useState<string | null>(null);

  const handleIncrease = (id: number) => {
    const product = cart.find((p) => p.id === id);
    if (product) {
      updateQuantity(id, product.quantity + 1);
      setError(null); // Clear the error on successful quantity update
    }
  };

  const handleDecrease = (id: number) => {
    const product = cart.find((p) => p.id === id);
    if (product && product.quantity > 1) {
      updateQuantity(id, product.quantity - 1);
      setError(null); // Clear the error on successful quantity update
    } else {
      setError("Quantity cannot be less than 1");
    }
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-700">Your cart is empty!</p>
        <Image src="/empty-cart.svg" alt="empty-cart" height={150} width={150} />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div
        id="hero"
        className="relative h-[316px] w-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.svg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <Image src="/Logo1.svg" alt="logo" height={32} width={50} />
          <h1 className="text-[48px] font-medium text-white">Cart</h1>
          <div className="flex flex-row items-center text-white">
            <h2 className="font-medium">Home</h2>
            <span className="ml-2">
              <Image src="icon.svg" alt="icon" height={8} width={14} />
            </span>
            <p className="font-light ml-2">Cart</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-4 border-b border-gray-300 shadow-lg">
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">Price: ${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDecrease(item.id)}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-300 transition-all duration-200"
              >
                -
              </button>
              <span className="text-lg font-semibold">{item.quantity}</span>
              <button
                onClick={() => handleIncrease(item.id)}
                className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-300 transition-all duration-200"
              >
                +
              </button>
            </div>

            <div className="text-xl font-semibold text-blue-600">${item.price * item.quantity}</div>

            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        <div className="flex justify-between items-center p-4 mt-4 border-t border-gray-300">
          <h2 className="text-2xl font-semibold">Total</h2>
          <span className="text-xl font-bold text-blue-600">${calculateTotal()}</span>
        </div>
      </div>

      <div className="bg-[#F9F1E7] h-auto md:h-[390px] md:w-[40%] p-6 ml-16 flex flex-col items-center mt-10 lg:mt-0 rounded-lg shadow-lg">
        <h1 className="font-semibold text-[32px] mb-6">Cart Totals</h1>
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between items-center gap-6 mt-6">
            <h1 className="font-medium text-[#000]">Subtotal</h1>
            <p className="text-[#9F9F9F]">${calculateTotal()}</p>
          </div>
          <div className="flex flex-row justify-between items-center gap-6 mt-6">
            <h1 className="font-medium text-[#000]">Total</h1>
            <p className="text-[#B88E2F]">${calculateTotal()}</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-6 mt-6">
            <Link href="/checkout">
              <button className="h-[58px] w-[222px] border rounded-md border-[#000] hover:bg-black hover:text-white transition-colors duration-300">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
