import { getPosts } from "@/db/queries";
import { OnePost } from "@/app/components/blog/OnePost";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { posts } = await getPosts();

  const post = posts.find((post) => post.id === parseInt(id));

  if (post) {
    return <OnePost post={post} relatedPosts={posts} />;
  } else {
    return <div>Post not found!</div>;
  }
}
export default Page;
