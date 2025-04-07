
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-marketplace-600 py-16 text-white">
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Buy & Sell Anything <br /> in Your Campus
          </h1>
          <p className="mt-4 text-lg text-white/80 md:text-xl">
            Join CampusConnect, your campus online marketplace for finding great deals
            and selling items you no longer need.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="bg-white text-marketplace-600 hover:bg-white/90">
                Start Selling
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Items
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "24px 24px"
        }} />
      </div>
    </section>
  );
}
