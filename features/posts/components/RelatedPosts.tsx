import { PostCard } from "./PostCard";
import type { RelatedPostsProps } from "../types";

export function RelatedPosts({
  posts,
  currentSlug,
  currentCategory,
}: RelatedPostsProps) {
  if (!posts) return null;
  const relatedPosts = posts.filter(
    (p) => p.slug !== currentSlug && p.category.id === currentCategory,
  );
  if (!relatedPosts) return null;

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Související články</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            {relatedPosts.map((p) => (
              <PostCard post={p} key={p.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
