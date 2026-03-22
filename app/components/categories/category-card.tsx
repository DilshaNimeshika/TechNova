"use client";
import { LucideIcon } from "lucide-react";
type CategoryCardProps = {
  icon: LucideIcon;
  title: string;
};
export default function CategoryCard({ icon: Icon, title }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-xl p-6 w-46 h-38 hover:bg-gray-300 cursor-pointer transition">
      <Icon size={38} className="text-gray-700 mb-2" />
      <p className="text-sm text-gray-700">{title}</p>
    </div>
  );
}
