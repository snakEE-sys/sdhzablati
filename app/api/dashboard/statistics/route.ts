import { getDashboardStats } from "@/features/dashboard/queries";

export async function GET() {
  const stats = await getDashboardStats();

  return Response.json({
    interventionsCount: stats.interventions,
    postsCount: stats.posts,
    galleryCount: stats.galleries,
    interventionsThisYear: stats.interventionsThisYear,
  });
}
