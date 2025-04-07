
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { mockProducts } from "@/data/mockData";
import { MyListingsTable } from "@/components/dashboard/MyListingsTable";
import { Link } from "react-router-dom";

const MyListings = () => {
  // Use first 10 products from mock data as user's listings
  const myProducts = mockProducts.slice(0, 10);
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        
        <div className="flex-1 overflow-auto">
          <div className="container py-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h1 className="text-3xl font-bold">My Listings</h1>
              <Link to="/dashboard/create-listing">
                <Button className="bg-marketplace-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Listing
                </Button>
              </Link>
            </div>
            
            {/* Listings Table */}
            <div className="mt-6 rounded-lg border">
              <MyListingsTable products={myProducts} />
            </div>
            
            {/* Pagination */}
            <div className="mt-6 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-marketplace-600 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MyListings;
