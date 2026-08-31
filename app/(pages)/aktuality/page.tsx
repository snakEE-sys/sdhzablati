import { PostList } from "@/features/posts/components/public/PostList";
import { getAllPosts, getCategories } from "@/features/posts/queries";

export default async function PostsPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts({
      published: true,
    }),
    getCategories(),
  ]);

  return (
    <main>
      <PostList posts={posts ?? []} categories={categories} />
    </main>
  );
}
