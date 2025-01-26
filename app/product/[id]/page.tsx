"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { useCart } from "@/app/cartContext";

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

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const fetchProduct = async () => {
    if (!id) return;

    try {
      const query = `
        *[_type == "product" && _id == $id][0] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url,
          tags
        }
      `;
      const data = await sanity.fetch(query, { id });
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id, fetchProduct]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl font-semibold text-gray-700">Product not found!</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image Section */}
        <div className="flex items-center justify-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-xl shadow-2xl transform transition-all hover:scale-105"
          />
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-between bg-white shadow-lg rounded-xl p-6">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">{product.title}</h1>
            <p className="text-gray-600 text-lg my-4 line-clamp-[9]">{product.description}</p>

            <div className="flex items-center gap-6 my-6">
              <p className="text-3xl font-bold text-slate-600">${product.price}</p>
              {product.discountPercentage > 0 && (
                <p className="text-xl text-green-500 font-semibold">
                  {product.discountPercentage}% OFF
                </p>
              )}
            </div>
          </div>

          {/* Tags Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart({
                id: product._id,
                title: product.title,
                price: product.price,
                quantity: 1,
                image: product.imageUrl,
              });
            }}
            className="bg-[#B88E2F] px-6 py-3 mt-6 w-full text-white rounded-lg font-medium text-lg hover:bg-[#fdc542] transition-colors"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
