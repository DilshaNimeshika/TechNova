import TopNavbar from "./components/landing/ui/main-nav";
import CategoryNavbar from "./components/landing/ui/category-navbar";
import Hero  from "./components/landing/hero-banner";
import CategorySection from "./components/categories/category-section";
import Products from "./components/categories/product-grid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavbar />
      <CategoryNavbar />
      <Hero />
      <CategorySection />
      <Products />
    </div>
  );
}
