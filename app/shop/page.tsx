"use client";

import { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/cartContext"; // Corrected import
import customer from "@/public/customer-support.svg";
import guarantee from "@/public/guarantee.svg";
import trophy from "@/public/trophy 1.svg";
import shipping from "@/public/shipping.svg";

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
}

const ShopePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();
  const { addToCart } = useCart(); // Correct placement of useCart hook

  // Fetch products from Sanity API
  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          title,
          price,
          description,
          discountPercentage,
          "imageUrl": productImage.asset->url
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const navigateToProduct = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const truncateDescription = (description: string = "") =>
    description.length > 100 ? description.substring(0, 100) + "..." : description;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[316px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/Rectangle 1.svg')" }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0">
          <h1 className="text-[48px] font-medium text-black">Shop</h1>
          <div className="flex items-center mt-2">
            <h2 className="text-black font-medium">Home</h2>
            <span className="mx-2">
              <Image src={"/icon.svg"} alt="icon" height={8} width={14} />
            </span>
            <p className="text-black font-light">Shop</p>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="p-6">
        <h2 className="text-center text-slate-800 text-2xl font-bold mb-6">
          Products From API&apos;s Data
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => navigateToProduct(String(product._id))}
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-slate-800 mt-2 text-sm">
                  {truncateDescription(product.description)}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-slate-600 font-bold">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
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
                      image: product.imageUrl,
                    }); 
                  }}
                  className="bg-[#B88E2F] px-4 py-2 w-full text-white rounded-lg font-medium text-md mt-4 hover:bg-[#e5b544] transition-colors"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF3EA] py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <FeatureCard
            image={trophy}
            title="High Quality"
            description="Crafted from top materials"
          />
          <FeatureCard
            image={guarantee}
            title="Warranty Protection"
            description="Over 2 years"
          />
          <FeatureCard
            image={shipping}
            title="Free Shipping"
            description="Order over $150"
          />
          <FeatureCard
            image={customer}
            title="24 / 7 Support"
            description="Dedicated support"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ image: string; title: string; description: string }> = ({
  image,
  title,
  description,
}) => (
  <div className="flex flex-col items-center">
    <Image src={image} alt={title} width={60} height={60} />
    <h3 className="font-semibold text-[25px] text-[#242424] mt-4">{title}</h3>
    <p className="font-medium text-[20px] text-[#898989]">{description}</p>
  </div>
);

export default ShopePage;
