import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/features/posts/queries";
import {
  PostArticle,
  PostHero,
  PostMeta,
} from "@/features/posts/components/PostDetails";
import { PostSocialShare } from "@/features/posts/components/PostSocialShare";
import { RelatedPosts } from "@/features/posts/components/RelatedPosts";
import { PostSidebar } from "@/features/posts/components/PostSidebar";
import { ArrowLeft } from "lucide-react";

export const instant = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getPostBySlug(slug),
    getAllPosts(),
  ]);
  if (!post) return notFound();
  if (!allPosts) return null;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <div className="container mt-8 mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-slate-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Zpět na všechny aktuality
          </Link>
        </div>
        <section className="py-8">
          <div className="container mx-auto">
            <PostMeta post={post} />
          </div>
        </section>
        <section className="mb-12">
          <div className="container mx-auto">
            <PostHero post={post} />
          </div>
        </section>
        <section className="mb-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <PostArticle post={post} />
                <div className="mt-12 pt-6 border-t">
                  <PostSocialShare />
                </div>
              </div>
              <div className="lg:col-span-1">
                <PostSidebar author={post.author} category={post.category} />
              </div>
            </div>
          </div>
        </section>
        <RelatedPosts
          posts={allPosts}
          currentSlug={post.slug}
          currentCategory={post.category.id}
        />
      </main>
    </div>
  );
}
