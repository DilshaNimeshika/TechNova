"use client";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Watch,
  Camera,
  Headphones,
  Monitor,
  Gamepad2,
} from "lucide-react";
import CategoryCard from "./category-card";
export default function CategorySection() {
  return (
    <section className="bg-gray-50 py-14 px-10">
      {/* Title and Arrows */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-semibold">Brows By Category</h2>
        <div className="flex gap-4">
          <ChevronLeft className="cursor-pointer text-gray-600" />
          <ChevronRight className="cursor-pointer text-gray-600" />
        </div>
      </div>
      {/* CategoryCards */}
      <div className="flex gap-6 flex-wrap items-center justify-center">
        <CategoryCard icon={Smartphone} title="phones" />
        <CategoryCard icon={Watch} title="Smart Watches" />
        <CategoryCard icon={Camera} title="Cameras" />
        <CategoryCard icon={Headphones} title="Headphones" />
        <CategoryCard icon={Monitor} title="Computers" />
        <CategoryCard icon={Gamepad2} title="Gaming" />
      </div>
    </section>
  );
}
