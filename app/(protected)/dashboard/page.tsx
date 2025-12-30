"use client";
import { Sidebar } from "@/components/Sidebar";
import { Statistics } from "@/components/Statistics";
import { LastVyjezdy } from "@/components/LastVyjezdy";
import { Toaster } from "sonner";
import { LastAktuality } from "@/components/LastAktuality";
import { Suspense } from "react";
import { DashboardSuspense } from "@/components/DashboardSuspense";
import { LastGalerie } from "@/components/LastGalerie";

/*const aplaudImage = uploadImage(
  "https://images.squarespace-cdn.com/content/v1/5f90ff6a5f71bf45a0c0256c/1606871553343-3NUCEHB5S1N3VAEVSLGT/autism+bubble.jpg",
  "images"
);*/

//const gallery = await getAllImages();
//const rst = gallery?.map((gallery) => console.log(gallery));

const Dashboard = () => {
  return (
    <div className="flex min-h-[100dvh] bg-slate-50">
      <Sidebar />
      <div className="flex-1 md:ml-64 pt-16 md:pt-0">
        <main className="p-4 md:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Přehled</h1>
          </div>
          <Suspense fallback={<DashboardSuspense />}>
            <Statistics />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <LastVyjezdy />
              <LastAktuality />
              <LastGalerie />
            </div>
          </Suspense>
        </main>
      </div>
      <Toaster />
    </div>
  );
};
export default Dashboard;
