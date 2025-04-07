
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, MessageSquare, User } from "lucide-react";
import { useParams } from "react-router-dom";
import { getProductById, mockProducts } from "@/data/mockData";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { getProductsByCategory } from "@/data/mockData";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(mockProducts, Number(id));
  
  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="container flex-1 py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-2xl font-bold">Product Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button className="mt-6 bg-marketplace-600" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Get similar products from the same category
  const similarProducts = getProductsByCategory(mockProducts, product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Product Image */}
            <div className="overflow-hidden rounded-lg border bg-white">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-2xl font-bold text-marketplace-600">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.isFeatured && (
                    <Badge className="bg-marketplace-600">Featured</Badge>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{product.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Posted on {new Date(product.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="rounded-lg border bg-background p-4">
                <h3 className="font-semibold">Description</h3>
                <p className="mt-2 text-muted-foreground">{product.description}</p>
              </div>
              
              <div className="rounded-lg border bg-background p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-muted p-2">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Seller</h3>
                    <p className="text-sm text-muted-foreground">Member since {new Date(product.createdAt).getFullYear()}</p>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-marketplace-600">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Seller
                </Button>
              </div>
            </div>
          </div>
          
          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <FeaturedSection 
              title="Similar Products" 
              products={similarProducts} 
              viewAllLink={`/category/${product.category}`}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
