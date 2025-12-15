import Posts from "@/app/components/blog/Posts";
import { getPosts } from "@/db/queries";
export const dynamic = "force-dynamic";

async function BlogPage() {
  const { posts } = await getPosts();

  return (
    <div>
      <section className="relative py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aktuality a novinky
          </h1>
          <p className="text-lg max-w-3xl text-white/90">
            Sledujte nejnovější informace o činnosti našeho sboru, zásazích,
            školeních a dalších událostech.
          </p>
        </div>
      </section>
      {/* Posts */}
      <Posts posts={posts} />
    </div>
  );
}
export default BlogPage;
