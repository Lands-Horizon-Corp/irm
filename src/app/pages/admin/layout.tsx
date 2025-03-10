import { cookies } from "next/headers"


import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import AdminNav from "@/components/nav/navs/admin-nav";
import AdminSidebar from "@/components/app-sidebar /app-sidebar-components/admin-sidebar";


export default async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AdminSidebar />
      <SidebarInset className="ecoop-scroll max-h-[98vh] w-full overflow-y-auto">
        <main className="">
          <AdminNav />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
