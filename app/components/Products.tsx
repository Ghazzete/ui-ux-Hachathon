import React from "react";
import Image from "next/image";
import Card1 from "@/public/card (1).svg";
import Card2 from "@/public/card (2).svg";
import Card3 from "@/public/card (3).svg";
import Card4 from "@/public/card (4).svg";
import Card5 from "@/public/card (5).svg";
import Card6 from "@/public/card (6).svg";
import Card7 from "@/public/card (7).svg";
import Card8 from "@/public/card (8).svg";

function Products() {
  // Array of product data
  const products = [
    {
      id: 1,
      img: Card1,
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
    },
    {
      id: 2,
      img: Card2,
      title: "Leviosa",
      description: "Stylish chair",
      price: "Rp 2.500.000",
    },
    {
      id: 3,
      img: Card3,
      title: "Lolito",
      description: "Luxury sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
    },
    {
      id: 4,
      img: Card4,
      title: "Respira",
      description: "Outdoor bar table",
      price: "Rp 500.000",
      badge: "New",
      badgeColor: "bg-[#2EC1AC]",
    },
    {
      id: 5,
      img: Card5,
      title: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
    },
    {
      id: 6,
      img: Card6,
      title: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
    },
    {
      id: 7,
      img: Card7,
      title: "Pingky",
      description: "Cute pink sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
    },
    {
      id: 8,
      img: Card8,
      title: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
    },
  ];

  return (
    <div className="mt-14 w-full px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Title Section */}
      <div className="flex justify-center items-center flex-col text-center">
        <h1 className="font-bold lg:text-[40px] md:text-[34px] text-2xl">
          Our Products
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 justify-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative flex flex-col w-[285px] h-[446px] bg-[#F4F5F7] group overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative w-full h-[301px]">
              <Image
                src={product.img}
                alt={product.title}
                width={285}
                height={301}
                className="w-full h-full object-cover"
              />
              {/* Add to Cart Button */}
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 w-[202px] h-[48px] bg-[#fff] text-[#B88E2F] px-4 py-2 transition-all duration-300">
                Add to Cart
              </button>
            </div>

            {/* Discount Circle */}
            {product.discount && (
              <div className="absolute top-4 right-4 bg-[#E97171] text-white text-sm font-bold w-[48px] h-[48px] flex items-center justify-center rounded-full shadow-lg">
                {product.discount}
              </div>
            )}

            {/* Badge (like 'New') */}
            {product.badge && (
              <div
                className={`absolute top-4 right-4 ${product.badgeColor} text-white text-sm font-bold w-[48px] h-[48px] flex items-center justify-center rounded-full shadow-lg`}
              >
                {product.badge}
              </div>
            )}

            {/* Text Content */}
            <h1 className="px-2 font-semibold mt-3">{product.title}</h1>
            <p className="px-2 font-medium text-[#898989] mt-1">
              {product.description}
            </p>
            <p className="px-2 font-semibold text-[20px] mt-2">
              {product.price}
              {product.originalPrice && (
                <span className="line-through text-[#898989] ml-2">
                  {product.originalPrice}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="py-6 flex justify-center">
        <button className="w-[245px] h-[48px] border-2 border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all duration-300">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Products;
