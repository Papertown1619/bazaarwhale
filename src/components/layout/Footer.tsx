
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">BazaarWhale</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Buy and sell items easily on our local marketplace platform.
            </p>
            <div className="mt-4 flex space-x-3">
              <Link to="#" className="text-muted-foreground hover:text-marketplace-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-marketplace-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-marketplace-600">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <nav className="mt-2 flex flex-col space-y-2">
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">Electronics</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">Vehicles</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">Property</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">Furniture</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Help</h3>
            <nav className="mt-2 flex flex-col space-y-2">
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">FAQs</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">Contact Us</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">Terms of Service</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">Privacy Policy</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">About</h3>
            <nav className="mt-2 flex flex-col space-y-2">
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">About Us</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">Careers</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">Press</Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-marketplace-600">Blog</Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BazaarWhale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
