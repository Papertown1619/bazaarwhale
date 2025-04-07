
import { Button } from "@/components/ui/button";
import { Smartphone, Car, Home, Sofa, ShoppingBag, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Electronics", icon: Smartphone, href: "#electronics" },
  { name: "Vehicles", icon: Car, href: "#vehicles" },
  { name: "Property", icon: Home, href: "#property" },
  { name: "Furniture", icon: Sofa, href: "#furniture" },
  { name: "All Categories", icon: MoreHorizontal, href: "/categories" },
];

export function CategoryFilter() {
  return (
    <div className="w-full overflow-auto pb-2">
      <div className="flex gap-2 md:gap-4 min-w-max">
        {categories.map((category) => (
          <Link to={category.href} key={category.name}>
            <Button
              variant="outline"
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
