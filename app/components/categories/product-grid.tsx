"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

const products = [
  {
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    price: "$900",
    image: "/images/Apple iPhone 14 Pro Max 128GB Deep Purple.jpg",
  },
  {
    name: "Blackmagic Pocket Cinema Camera 6k",
    price: "$2535",
    image: "/images/Blackmagic Pocket Cinema Camera 6k.jpg",
  },
  {
    name: "Apple Watch Series 9 GPS 41mm",
    price: "$399",
    image: "/images/Apple Watch Series 9 GPS 41mm.jpg",
  },
  {
    name: "AirPods Max Silver",
    price: "$549",
    image: "/images/AirPods Max Silver.jpg",
  },
  {
    name: "Samsung Galaxy Watch6 Classic",
    price: "$369",
    image: "/images/Samsung Galaxy Watch6 Classic.jpg",
  },
  {
    name: "Galaxy Z Fold5 Unlocked 256GB",
    price: "$1799",
    image: "/images/Galaxy Z Fold5 Unlocked 256GB.jpg",
  },
  {
    name: "Galaxy Buds FE Graphite",
    price: "$99.99",
    image: "/images/Galaxy Buds FE Graphite.jpg",
  },
  {
    name: 'Apple iPad 9 10.2" 64GB Wi-Fi',
    price: "$398",
    image: "/images/Apple iPad 9 10.2.jpg",
  },
];

export default function Products() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-10">
        {/* Tabs */}
        <div className="flex gap-6 mb-10 text-sm font-medium">
          <button className="border-b-2 border-black pb-1">New Arrival</button>
          <button className="text-gray-400 hover:text-black">Bestseller</button>
          <button className="text-gray-400 hover:text-black">
            Featured Products
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 relative hover:shadow-lg transition"
            >
              {/* Wishlist Icon */}
              <Heart
                size={18}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 cursor-pointer"
              />

              {/* Product Image */}
              <div className="flex justify-center mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={140}
                  height={140}
                />
              </div>

              {/* Product Name */}
              <p className="text-sm text-center text-gray-700 mb-3">
                {product.name}
              </p>

              {/* Price */}
              <h3 className="text-xl font-semibold text-center mb-4">
                {product.price}
              </h3>

              {/* Button */}
              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
