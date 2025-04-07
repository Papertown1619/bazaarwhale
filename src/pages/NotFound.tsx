
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-marketplace-600">404</h1>
          <h2 className="mt-6 text-3xl font-bold">Page not found</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-10">
            <Link to="/">
              <Button size="lg" className="bg-marketplace-600">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
