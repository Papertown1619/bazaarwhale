
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { getFeaturedProducts, getRecentProducts, mockProducts } from "@/data/mockData";

const Index = () => {
  const featuredProducts = getFeaturedProducts(mockProducts);
  const recentProducts = getRecentProducts(mockProducts);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        <div className="container py-8">
          <CategoryFilter />
          
          <FeaturedSection 
            title="Featured Items" 
            products={featuredProducts}
            viewAllLink="/featured" 
          />
          
          <FeaturedSection 
            title="Recently Added" 
            products={recentProducts}
            viewAllLink="/recent" 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
