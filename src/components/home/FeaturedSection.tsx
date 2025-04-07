
import { ProductCard, ProductProps } from "@/components/products/ProductCard";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface FeaturedSectionProps {
  title: string;
  products: ProductProps[];
  viewAllLink?: string;
}

export function FeaturedSection({ 
  title, 
  products, 
  viewAllLink = "#" 
}: FeaturedSectionProps) {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link 
          to={viewAllLink} 
          className="flex items-center text-marketplace-600 hover:text-marketplace-700"
        >
          View all <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
