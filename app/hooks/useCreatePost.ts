import { PostsSchema } from "@/utils/posts-schema";

export const useCreatePost = async (data: PostsSchema) => {
  const dbUrl = "/api/dashboard/posts";
  const dbRes = await fetch(dbUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!dbRes.ok) {
    throw new Error("Chyba při vytváření aktuality");
  }
};
