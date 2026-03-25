"use client";

import { Search, Heart, ShoppingCart, User, Camera } from "lucide-react";
import { useRef } from "react";

export default function TopNavbar() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCameraClick = () => {
    fileInputRef.current?.click(); // open file explorer
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Selected image:", file);
      // 👉 later you can upload this image to backend / AI search
    }
  };

  return (
    <div className="flex items-center justify-between px-10 py-4 border-b bg-white">

      {/* Logo */}
      <div className="text-xl font-bold text-black">
        TechNova
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-6 py-4 rounded-full w-[40%]">

        {/* Input */}
        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none flex-1 text-sm"
        />

        {/* Camera Icon */}
        <Camera
          size={20}
          className="text-gray-500 cursor-pointer mx-2"
          onClick={handleCameraClick}
        />

        {/* Search Icon */}
        <Search size={20} className="text-gray-500 cursor-pointer" />

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-5 text-gray-500">
        <Heart className="cursor-pointer hover:text-black" />
        <ShoppingCart className="cursor-pointer hover:text-black" />
        <User className="cursor-pointer hover:text-black" />
      </div>

    </div>
  );
}

