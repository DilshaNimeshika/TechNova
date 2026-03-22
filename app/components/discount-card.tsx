"use client";
import Image from "next/image";

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
  oldPrice?: string;
};

export default function DiscountCard({
  image,
  title,
  price,
  oldPrice,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full hover:shadow-lg transition-shadow">
      
      {/* Image */}
      <div className="flex justify-center mb-4">
        <Image
          src={image}
          alt={title}
          width={120}
          height={120}
          className="object-cover rounded-md"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mt-2">{title}</h3>

      {/* Price */}
      <div className="flex items-center mt-2 gap-2">
        <span className="text-red-500 font-bold text-lg">${price}</span>
        {oldPrice && (
          <span className="text-gray-500 line-through text-sm">
            ${oldPrice}
          </span>
        )}
      </div>

      {/* Button */}
      <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors w-full">
        Buy Now
      </button>
      
    </div>
  );
}