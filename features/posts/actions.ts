"use server";

import { db } from "@/db/db";
import { tryCatch } from "@/lib/utils/try-catch";
import { posts } from "@/db/schema";
import { slugify } from "./hooks/slugify";
import { updateTag } from "next/cache";
import { PostsValues } from "./schema";
import { and, eq, ne } from "drizzle-orm";
import { isAuthorized } from "@/utils/isAuthorized";

export async function createPost(post: PostsValues) {
  const session = await isAuthorized();

  const authorId = session.user.id;

  const { error } = await tryCatch(
    db.transaction(async (tx) => {
      if (post.featured) {
        await tx
          .update(posts)
          .set({
            featured: false,
          })
          .where(eq(posts.featured, true));
      }

      await tx.insert(posts).values({
        title: post.title,
        slug: slugify(post.title),
        content: post.content,
        categoryId: post.categoryId,
        authorId,
        featured: post.featured,
        published: post.published,
        excerpt: post.excerpt,
      });
    }),
  );

  if (error) {
    return {
      error: error.message,
      success: false,
    };
  }

  updateTag("posts");
  return { success: true };
}

export async function editPost(postId: string, post: PostsValues) {
  await isAuthorized();

  const { error } = await tryCatch(
    db.transaction(async (tx) => {
      if (post.featured) {
        await tx
          .update(posts)
          .set({
            featured: false,
          })
          .where(and(eq(posts.featured, true), ne(posts.id, postId)));
      }

      await tx
        .update(posts)
        .set({
          title: post.title,
          slug: slugify(post.title),
          content: post.content,
          categoryId: post.categoryId,
          featured: post.featured,
          published: post.published,
          excerpt: post.excerpt,
        })
        .where(eq(posts.id, postId));
    }),
  );

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  updateTag("posts");
  updateTag(`post-${slugify(post.title)}`);

  return { success: true };
}
