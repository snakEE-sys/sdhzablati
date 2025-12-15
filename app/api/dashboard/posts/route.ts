import { deletePost, getLastThreePosts, insertPost } from "@/db/queries";
import { postsSchema } from "@/utils/posts-schema";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedBody = postsSchema.parse(body);
    const { category, title, excerpt, content, featured, author } =
      validatedBody;

    await insertPost(title, excerpt, category, content, featured, author);

    return new Response(
      JSON.stringify({ success: "Post successfully created" }),
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      {
        return new Response(
          JSON.stringify({ error: "Required fields are missing" }),
          {
            status: 400,
          }
        );
      }
    } else {
      return new Response(JSON.stringify({ error: "Error creating post" }), {
        status: 500,
      });
    }
  }
}

export async function GET() {
  try {
    // Get the last three posts from the database
    const { posts } = await getLastThreePosts();
    return new Response(JSON.stringify(posts));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch posts" }), {
      status: 500,
    });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing vyjezd ID" }), {
        status: 400,
      });
    }
    await deletePost(Number(id));

    return new Response(null, { status: 204 }); // 204 No Content
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete vyjezd" }), {
      status: 500,
    });
  }
}
