"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const items = [
  {
    title: "Sony Camera",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    img: "/products/watch.png",
    dark: false,
  },
  {
    title: "Ipad Pro",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    img: "/products/ipad.png",
    dark: true,
  },
  {
    title: "Samsung Galaxy",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    img: "/products/fold.png",
    dark: false,
  },
  {
    title: "Macbook Pro",
    desc: "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
    img: "/products/macbook.png",
    dark: true,
  },
];
export default function PopularProducts() {
  return (
    <section className="bg-gray-50 py-14 px-10">
      {/* Title + Arrows */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-semibold">Popular Products</h2>

        <div className="flex gap-4">
          <ChevronLeft className="cursor-pointer text-gray-600" />
          <ChevronRight className="cursor-pointer text-gray-600" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg hover:shadow-lg transition ${item.dark ? "bg-gray-800 text-white " : "bg-gray-100 text-gray-800"}`}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm">{item.desc}</p>
            <button
              className="mt-4 bg-white border border-gray-300 
           text-black py-2 px-4 rounded hover:bg-gray-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
