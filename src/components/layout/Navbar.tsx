import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingBag, Menu, User } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-marketplace-600" />
            <span className="text-xl font-bold text-marketplace-600">CampusConnect</span>
          </Link>
        </div>

        <div className="hidden md:flex relative md:w-1/3 lg:w-1/2">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-9" />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="ghost" size="icon" className="md:hidden">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/">
            <Button variant="default" size="sm" className="bg-marketplace-600 hover:bg-marketplace-700">
              Explore
            </Button>
          </Link>
        </div>
      </div>

      <div className="container md:hidden pb-3">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search products..." className="pl-9" />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="container md:hidden py-3 border-t">
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="px-2 py-1.5 hover:bg-muted rounded-md">Home</Link>
            <Link to="/categories" className="px-2 py-1.5 hover:bg-muted rounded-md">Categories</Link>
            <Link to="/dashboard" className="px-2 py-1.5 hover:bg-muted rounded-md">Dashboard</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
