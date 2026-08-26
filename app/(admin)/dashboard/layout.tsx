import { Sidebar } from "@/components/Sidebar";
import { MobileHeader } from "@/components/MobileHeader";
import { Toaster } from "sonner";
import { UserProfile } from "@/components/Profile";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50/50">
      {/*<Sidebar className="hidden md:flex inset-y-0" />*/}
      <div className="flex-col min-h-screen">
        <MobileHeader />
        <main className="flex-1 p-4 md:p-8 lg:p-10 mx-auto w-full">
          {children}
        </main>
        <Toaster />
      </div>
    </div>
  );
}
