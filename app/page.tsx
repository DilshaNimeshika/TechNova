import TopNavbar from "./components/landing/ui/main-nav";
import CategoryNavbar from "./components/landing/ui/category-navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNavbar />
      <CategoryNavbar />
    </div>
  );
}
