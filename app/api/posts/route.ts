import { getPosts } from "@/db/queries";

export async function GET() {
  try {
    const { posts } = await getPosts();
    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch posts" }), {
      status: 500,
    });
  }
}
