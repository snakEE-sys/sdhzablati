import { db } from "@/db/db";
import { posts as postsTable } from "@/db/schema/posts";
import { tryCatch } from "@/lib/utils/try-catch";
import { eq } from "drizzle-orm";
import { Post } from "../types";

export async function getAllPosts(options?: {
  published: boolean;
  limit?: number;
}) {
  const { data: posts, error } = await tryCatch(
    db.query.posts.findMany({
      where: options?.published ? eq(postsTable.published, true) : undefined,
      columns: {
        id: true,
        slug: true,
        title: true,
        content: true,
        createdAt: true,
        author: true,
        featured: true,
        published: true,
        excerpt: true,
      },
      with: {
        category: {
          columns: {
            name: true,
          },
        },
      },
    })
  );

  if (error) throw error;

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
    author: post.author,
    featured: post.featured,
    published: post.published,
    excerpt: post.excerpt,
    category: post.category?.name,
  }));
}
export async function getPostBySlug(slug: string) {
  try {
    const post = await db.query.posts.findFirst({
      where: eq(postsTable.slug, slug),
      columns: {
        id: true,
        slug: true,
        title: true,
        content: true,
        createdAt: true,
        author: true,
        featured: true,
        published: true,
        excerpt: true,
      },
      with: {
        category: {
          columns: {
            name: true,
          },
        },
      },
    });

    if (!post) return null;
    return {
      ...post,
      date: post.createdAt.toLocaleDateString("cs-cz", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      category: post.category?.name,
    };
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function getCategories() {
  try {
    const categories = await db.query.posts_categories.findMany({
      columns: {
        id: true,
        name: true,
      },
    });
    return categories.map((category) => ({
      id: category.id,
      name: category.name,
    }));
  } catch (error) {
    throw new Error(error as string);
  }
}
