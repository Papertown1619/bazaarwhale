
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { LayoutDashboard, ShoppingBag, Package, MessageSquare, User, Settings, LogOut } from "lucide-react";

export function DashboardSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-marketplace-600" />
          <span className="text-xl font-bold">BazaarWhale</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="px-4 py-6">
        <SidebarMenu>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/dashboard" className="flex w-full items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                <span>Overview</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/dashboard/my-listings" className="flex w-full items-center gap-2">
                <Package className="h-4 w-4" />
                <span>My Listings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/dashboard/messages" className="flex w-full items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Messages</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        <SidebarMenu className="mt-6">
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/dashboard/profile" className="flex w-full items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/dashboard/settings" className="flex w-full items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="border-t px-6 py-4">
        <button className="flex w-full items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </button>
      </SidebarFooter>
      
      <SidebarTrigger className="absolute -right-3 top-10 z-50" />
    </Sidebar>
  );
}
