"use client";
import { Search } from "lucide-react";

export default function TopNavbar() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex items-center justify-between px-10 py-4 border-b sticky top-0 bg-white z-50">
      {/* logo */}
      <div className="text-xl font-bold">▾ TechNova</div>
      {/* search */}
      <div className="flex items-center bg-gray-100 px-6 py-3 rounded-md w-1/3">
        {/* search icon */}

        <Search size={18} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>
      {/* Links */}
      <div className="flex items-center gap-6">
      <button onClick={() => scrollTo("hero")} className="hover:text:black">
        Home
      </button>
      <button onClick={() => scrollTo("about")} className="text-gray-500 hover:text-black">
        About
      </button>
      <button onClick={() => scrollTo("contact")} className="text-gray-500 hover:text-black">
        Contact
      </button>
      </div>
    </div>
  );
}
