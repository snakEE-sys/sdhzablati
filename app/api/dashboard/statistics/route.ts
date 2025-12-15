import { db } from "@/db/db";
import { vyjezd } from "@/db/schema/vyjezd";
import { posts } from "@/db/schema/posts";
import { count } from "drizzle-orm";
import { getGalleryCount, getImagesCount } from "@/app/hooks/useCloudinary";

export async function GET() {
  const vyjezdStatistics = await db.select({ count: count() }).from(vyjezd);
  const postStatistics = await db.select({ count: count() }).from(posts);
  const galleryStatistics = await getGalleryCount();
  const imagesStatistics = await getImagesCount();
  return new Response(
    JSON.stringify({
      vyjezdCount: vyjezdStatistics[0].count,
      postCount: postStatistics[0].count,
      galleryCount: galleryStatistics,
      imagesCount: imagesStatistics,
    })
  );
}
