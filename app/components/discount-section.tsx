"use client";
import DiscountCard from "./discount-card";
export default function DiscountSection() {
  return (
    <section className="px-10 py-16 bg-gray-50">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-8 ">Special Discounts</h2>
      {/* Discount Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <DiscountCard
          image="/p1.png"
          title="iPhone 14 Pro"
          price="999"
          oldPrice="1199"
        />

        <DiscountCard
          image="/p2.png"
          title="Apple Watch Series 8"
          price="399"
          oldPrice="499"
        />

        <DiscountCard
          image="/p3.png"
          title="AirPods Pro"
          price="199"
          oldPrice="249"
        />

        <DiscountCard
          image="/p4.png"
          title="MacBook Air M2"
          price="1099"
          oldPrice="1299"
        />
      </div>
    </section>
  );
}
