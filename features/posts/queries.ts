import { db } from "@/db/db";
import { posts as postsTable } from "@/db/schema";
import { tryCatch } from "@/lib/utils/try-catch";
import { desc, eq } from "drizzle-orm";
import { cacheTag } from "next/cache";

export async function getAllPosts(options?: {
  published: boolean;
  limit?: number;
}) {
  const { data: posts, error } = await tryCatch(
    db.query.posts.findMany({
      where: options?.published ? eq(postsTable.published, true) : undefined,
      with: {
        category: true,
        author: true,
      },
      orderBy: desc(postsTable.createdAt),
      limit: options?.limit,
    }),
  );

  if (error) throw error;
  if (!posts) return null;

  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    date: post.createdAt.toLocaleDateString("cs-cz", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    content: post.content,
    author: {
      id: post.author.id,
      name: post.author.name,
      description: post.author.description,
    },
    featured: post.featured,
    published: post.published,
    excerpt: post.excerpt,
    category: post.category?.name,
    image: post.image ?? undefined,
  }));
}

export async function getPostBySlug(slug: string) {
  const { data: post, error } = await tryCatch(
    db.query.posts.findFirst({
      where: eq(postsTable.slug, slug),
      with: {
        category: true,
        author: true,
      },
    }),
  );

  if (!post) return null;
  if (error) throw error;

  return {
    ...post,
    date: post.createdAt.toLocaleDateString("cs-cz", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    author: {
      id: post.author.id,
      name: post.author.name,
      description: post.author.description,
    },
  };
}

export async function getCategories() {
  "use cache";
  cacheTag("posts_categories");
  return await db.select().from(postsTable);
}
