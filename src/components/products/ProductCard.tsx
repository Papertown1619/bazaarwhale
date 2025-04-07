
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  location: string;
  isFeatured?: boolean;
  createdAt: string;
}

export function ProductCard({ product }: { product: ProductProps }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          {product.isFeatured && (
            <Badge className="absolute left-2 top-2 bg-marketplace-600">
              Featured
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 text-muted-foreground hover:bg-white hover:text-marketplace-600"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="space-y-1">
          <h3 className="font-semibold line-clamp-1">{product.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {product.location}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="font-bold text-lg text-marketplace-600">
          ${product.price.toLocaleString()}
        </p>
        <p className="text-xs text-muted-foreground">
          {new Date(product.createdAt).toLocaleDateString()}
        </p>
      </CardFooter>
    </Card>
  );
}
