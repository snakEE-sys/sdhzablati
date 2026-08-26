import "server-only";

import { db } from "@/db/db";
import { interventions } from "@/db/schema";
import { posts } from "@/db/schema";
import cloudinary from "@/lib/cloudinary";
import { count, gte } from "drizzle-orm";
import { tryCatch } from "@/lib/utils/try-catch";

export type DashboardStats = {
  interventions: number;
  interventionsThisYear: number;
  posts: number;
  galleries: number;
};

const year = new Date().getFullYear();

export async function getDashboardStats(): Promise<DashboardStats> {
  const yearStart = new Date(year, 0, 1);

  const [interventionRows, interventionYearRows, postRows, galleryCount] =
    await Promise.all([
      db.select({ count: count() }).from(interventions),
      db
        .select({ count: count() })
        .from(interventions)
        .where(gte(interventions.date, yearStart)),
      db.select({ count: count() }).from(posts),
      getGalleryFolderCount(),
    ]);

  return {
    interventions: interventionRows[0]?.count ?? 0,
    interventionsThisYear: interventionYearRows[0]?.count ?? 0,
    posts: postRows[0]?.count ?? 0,
    galleries: galleryCount,
  };
}

async function getGalleryFolderCount(): Promise<number> {
  const { data, error } = await tryCatch(
    cloudinary.api.sub_folders("sdh/gallery"),
  );

  if (error || !data) return 0;
  return data.folders?.length ?? 0;
}
