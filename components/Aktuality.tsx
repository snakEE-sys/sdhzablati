import { Button } from "@/components/ui/button";
import { PostCard } from "@/features/posts/components/PostCard";
import { getAllPosts } from "@/features/posts/lib/queries";

export async function Aktuality() {
  const posts = await getAllPosts();
  return (
    <>
      <section id="aktuality" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Aktuality</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="rounded-full border-red-600 text-red-600 hover:bg-red-50"
            >
              Všechny aktuality
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
