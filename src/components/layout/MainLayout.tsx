import { ReactNode, useState } from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Header } from "@/components/layout/Header";
import { AIChatAssistant } from "@/components/chat/AIChatAssistant";
import { SidebarProvider } from "@/components/ui/sidebar";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
      <AIChatAssistant />
    </SidebarProvider>
  );
}
