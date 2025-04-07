
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardStatsCard } from "@/components/dashboard/DashboardStatsCard";
import { Button } from "@/components/ui/button";
import { Package, ShoppingBag, MessageSquare, Eye, Plus } from "lucide-react";
import { mockProducts } from "@/data/mockData";
import { MyListingsTable } from "@/components/dashboard/MyListingsTable";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Slice products to show only first 5 for the dashboard
  const myProducts = mockProducts.slice(0, 5);
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar />
        
        <div className="flex-1 overflow-auto">
          <div className="container py-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <Link to="/dashboard/create-listing">
                <Button className="bg-marketplace-600">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Listing
                </Button>
              </Link>
            </div>
            
            {/* Stats Cards */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <DashboardStatsCard
                title="Active Listings"
                value="5"
                icon={<Package />}
                description="2 featured listings"
              />
              <DashboardStatsCard
                title="Total Views"
                value="283"
                icon={<Eye />}
                description="75 views this week"
              />
              <DashboardStatsCard
                title="Messages"
                value="12"
                icon={<MessageSquare />}
                description="3 unread messages"
              />
              <DashboardStatsCard
                title="Sold Items"
                value="8"
                icon={<ShoppingBag />}
                description="2 pending payments"
              />
            </div>
            
            {/* Recent Listings */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">My Recent Listings</h2>
                <Link to="/dashboard/my-listings" className="text-marketplace-600 hover:underline">
                  View All
                </Link>
              </div>
              <div className="mt-4 rounded-lg border">
                <MyListingsTable products={myProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
