import { notFound } from "next/navigation";

import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/features/posts/queries";
import { PostHero } from "@/features/posts/components/public/PostHero";
import { PostContent } from "@/features/posts/components/public/PostContent";
import { RelatedPosts } from "@/features/posts/components/public/RelatedPosts";
import { PostSidebar } from "@/features/posts/components/public/PostSidebar";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts({ published: true });

  return posts?.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  return (
    <Suspense fallback="Loading..">
      <PostPageContent params={params} />
    </Suspense>
  );
}

async function PostPageContent({ params }: Props) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts({
    categoryId: post.category.id,
    currentSlug: post.slug,
    limit: 3,
  });

  return (
    <main className="overflow-hidden">
      <PostHero post={post} />

      <section className="m-2 md:m-4 rounded-3xl bg-white">
        <div className="container mx-auto px-4 py-16 md:px-8 md:py-24 lg:px-16 xl:px-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <PostContent content={post.content} />

            <aside className="lg:sticky lg:top-8 lg:self-start">
              <PostSidebar
                author={post.author}
                title={post.title}
                slug={post.slug}
              />
            </aside>
          </div>
        </div>
      </section>

      <RelatedPosts posts={relatedPosts} />
    </main>
  );
}
