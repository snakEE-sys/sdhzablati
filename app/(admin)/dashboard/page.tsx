import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
import { ErrorsTable } from "@/features/dashboard/components/ErrorsTable";
import { StatsGrid } from "@/features/dashboard/components/StatsGrid";
import { VisitorsPanel } from "@/features/dashboard/components/VisitorsPanel";
import { getDashboardAnalytics } from "@/features/dashboard/data";
import { Suspense } from "react";

export default async function DashboardPage() {
  const analytics = getDashboardAnalytics();

  return (
    <div className="space-y-8 md:space-y-10">
      <Suspense fallback="Loading..">
        <DashboardHeader />
        <StatsGrid />
      </Suspense>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
        <ErrorsTable errors={analytics.errors} />
        <VisitorsPanel visitors={analytics.visitors} />
      </div>
    </div>
  );
}
