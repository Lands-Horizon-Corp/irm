import { cookies } from "next/headers"

import { AppSidebar } from "@/components/app-sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar"
import AdminNav from "@/components/nav/navs/admin-nav";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"


  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="w-full">
        <AdminNav />
        {children}
      </main>
    </SidebarProvider>
  );
}
