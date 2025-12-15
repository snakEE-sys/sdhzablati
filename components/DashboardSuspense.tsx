import { Skeleton } from "@/components/ui/skeleton";

export const DashboardSuspense = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Skeleton className="w-100vh h-42" />
      <Skeleton className="w-100vh h-42" />
      <Skeleton className="w-100vh h-42" />
      <Skeleton className="w-100vh h-42" />
    </div>
  );
};
