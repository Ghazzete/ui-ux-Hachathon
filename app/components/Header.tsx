"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5"; // Close icon
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="w-full max-w-[1440px] mx-auto h-[100px] bg-[#FFFFFF] shadow-md">
      <div className="px-6 md:px-[56px] py-[29px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/logo1.svg"
            alt="logo"
            height={32}
            width={50}
            className="object-contain"
            
          />
          <h1 className="font-montserrat font-bold text-[24px] md:text-[34px] ml-2 w-auto h-auto">
            Funira
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-20 mx-auto">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Shop
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            Blog
          </Link>
          <Link href="/signUp" className="hover:text-gray-600">
            Contact
          </Link>
        </nav>

        {/* Icon Section */}
        <div className="flex space-x-4 md:space-x-10">
          <Image
            src="/Vector1.svg"
            alt="icon1"
            height={28}
            width={28}
            className="h-auto w-auto"
          />
          <Image
            src="/Vector2.svg"
            alt="icon2"
            height={28}
            width={28}
            className="h-auto w-auto"
          />
          <Image
            src="/Vector3.svg"
            alt="icon3"
            height={28}
            width={28}
            className="h-auto w-auto"
          />
          <Image
            src="/Vector4.svg"
            alt="icon4"
            height={28}
            width={28}
            className="h-auto w-auto"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <LuMenu
            size={28}
            onClick={toggleMenu}
            className="cursor-pointer hover:text-gray-600"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50">
          <div className="absolute right-0 top-0 w-2/3 max-w-[300px] bg-white h-full shadow-lg">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              <IoClose size={28} />
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col space-y-6 mt-16 px-6">
              <li>
                <Link href="/" onClick={toggleMenu} className="block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={toggleMenu} className="block">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMenu} className="block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/signUp" onClick={toggleMenu} className="block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
