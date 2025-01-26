"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import sanityClient from "@sanity/client";
import { useCart } from "@/app/cartContext";

// Sanity client setup
const sanity = sanityClient({
  projectId: "i51cc9b0",
  dataset: "production",
  apiVersion: "v1",
  useCdn: true,
});

interface Product {
  _id: number;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();
  const { addToCart } = useCart(); // Using custom cart context for cart management

  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `*[_type == "product"] {
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  // Truncate description
  const truncateDescription = (description: string = "") => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold text-slate-800 mt-4 mb-6">
        Products From API&apos;s Data
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
            onClick={() => router.push(`/product/${product._id}`)} // Navigate on card click
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-slate-900">
                {product.title}
              </h2>
              <p className="text-slate-700 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-bold text-blue-600">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600 font-medium">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </div>
              {/* Add To Cart Button */}
              <button
  onClick={(e) => {
    e.stopPropagation(); // Prevent navigation
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      quantity: 1, // Set default quantity to 1
      image: product.imageUrl, // Use the image URL here
    }); // Dispatching cart action
  }}
  className="bg-blue-500 px-4 py-2 w-full text-white rounded-lg font-medium text-md mt-4 hover:bg-blue-600 transition-colors"
>
  Add To Cart
</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
