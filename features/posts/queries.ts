"use server";
import "server-only";

import { db } from "@/db/db";
import { posts_categories } from "@/db/schema";
import { tryCatch } from "@/lib/utils/try-catch";
import { cacheTag } from "next/cache";
import { Category, Post } from "./types";

export async function getCategories(): Promise<Category[]> {
  "use cache";
  cacheTag("posts_categories");
  return await db.select().from(posts_categories);
}

export async function getAllPosts(options?: {
  published: boolean;
  limit?: number;
}): Promise<Post[] | null> {
  "use cache";

  cacheTag("posts");

  const { data: posts, error } = await tryCatch(
    db.query.posts.findMany({
      where: {
        published: options?.published,
      },
      with: {
        category: true,
        author: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      limit: options?.limit,
    }),
  );

  if (error) throw error;
  if (!posts) return null;

  return posts.map((post) => {
    return {
      id: post.id,
      slug: post.slug,
      title: post.title,
      date: post.createdAt,
      content: post.content,
      author: {
        id: post.author.id,
        name: post.author.name,
        description: post.author.description,
      },
      featured: post.featured,
      published: post.published,
      excerpt: post.excerpt,
      category: post.category,
      image: post.image ?? undefined,
    };
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  "use cache";
  cacheTag("posts");
  cacheTag(`post-${slug}`);

  const { data: post, error } = await tryCatch(
    db.query.posts.findFirst({
      where: {
        slug: {
          eq: slug,
        },
      },
      with: {
        category: true,
        author: true,
      },
    }),
  );

  if (error) throw error;
  if (!post) return null;

  return {
    ...post,
    image: post.image ?? undefined,
    date: post.createdAt,
    author: {
      id: post.author.id,
      name: post.author.name,
      description: post.author.description,
    },
  };
}

export async function getRelatedPosts({
  categoryId,
  currentSlug,
  limit = 3,
}: {
  categoryId: string;
  currentSlug: string;
  limit?: number;
}) {
  "use cache";
  cacheTag("posts");

  const relatedPosts = await db.query.posts.findMany({
    where: {
      published: true,
      categoryId: {
        eq: categoryId,
      },
      slug: {
        ne: currentSlug,
      },
    },

    with: {
      category: true,
      author: true,
    },

    limit,
  });

  return relatedPosts.map(({ createdAt, image, ...post }) => ({
    ...post,
    image: image ?? undefined,
    date: createdAt,
  }));
}
