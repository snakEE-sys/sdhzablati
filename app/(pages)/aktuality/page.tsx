import PostList from "@/features/posts/components/PostList";
import { getAllPosts, getCategories } from "@/features/posts/queries";

export default async function AktualityPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts({ published: true }),
    getCategories(),
  ]);

  console.log(posts);
  if (!posts) return null;

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
      <PostList posts={posts} categories={categories} />
    </div>
  );
}
