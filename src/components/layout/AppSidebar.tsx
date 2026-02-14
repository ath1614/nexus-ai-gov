import {
  LayoutDashboard, Building2, Bot, BarChart3, FolderOpen,
  Globe, ScrollText, Settings, ShieldCheck,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarHeader, useSidebar,
} from "@/components/ui/sidebar";
import { Shield } from "lucide-react";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "MSME Registry", url: "/registry", icon: Building2 },
  { title: "AI Matching", url: "/matching", icon: Bot },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Tenders", url: "/tenders", icon: FolderOpen },
  { title: "Export Mapping", url: "/exports", icon: Globe },
  { title: "Schemes", url: "/schemes", icon: ScrollText },
];

const adminItems = [
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Admin Controls", url: "/admin", icon: ShieldCheck },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
            <Shield className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <h2 className="text-sm font-bold text-sidebar-primary-foreground tracking-tight truncate">MSME Nexus AI</h2>
              <p className="text-[10px] text-sidebar-foreground/60 truncate">Smart Governance</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/40 text-[10px] uppercase tracking-widest">
            {collapsed ? "" : "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-primary-foreground hover:bg-sidebar-accent transition-all duration-200 group"
                      activeClassName="text-sidebar-primary-foreground bg-sidebar-accent border-l-2 border-sidebar-primary"
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0 group-hover:text-sidebar-primary transition-colors" />
                      <span className="truncate">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/40 text-[10px] uppercase tracking-widest">
            {collapsed ? "" : "System"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground/70 hover:text-sidebar-primary-foreground hover:bg-sidebar-accent transition-all duration-200 group"
                      activeClassName="text-sidebar-primary-foreground bg-sidebar-accent border-l-2 border-sidebar-primary"
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0 group-hover:text-sidebar-primary transition-colors" />
                      <span className="truncate">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
