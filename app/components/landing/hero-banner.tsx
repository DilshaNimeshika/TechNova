"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#1c1c22] to-[#0f0f12] text-white">
      <div className="max-w-7xl mx-auto px-10 py-20 flex items-center justify-between">
        {/* Left Content */}
        <div className="space-y-5 max-w-lg">
          <p className="text-gray-400">Pro.Beyond.</p>

          <h1 className="text-6xl font-light">
            iPhone 17 <span className="font-bold">Pro</span>
          </h1>

          <p className="text-gray-400 text-sm">
            Created to change everything for the better. For everyone
          </p>

          <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div>
          <Image
            src="/images/image-1.png"
            alt="iphone"
            width={520}
            height={520}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
