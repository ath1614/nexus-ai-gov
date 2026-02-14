import { Bell, Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/registry": "MSME Registry",
  "/matching": "AI Matching",
  "/analytics": "Analytics",
  "/tenders": "Tenders",
  "/exports": "Export Mapping",
  "/schemes": "Schemes",
  "/settings": "Settings",
  "/admin": "Admin Controls",
};

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const title = pageTitles[location.pathname] || "MSME Nexus AI";

  return (
    <header className="h-14 border-b border-border bg-card/80 backdrop-blur-sm flex items-center justify-between px-4 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-xl">
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
        <Button variant="ghost" size="icon" className="rounded-xl relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent" />
        </Button>
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-primary text-primary-foreground text-xs font-medium">AK</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
