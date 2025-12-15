import { z } from "zod";

export const postsSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(10, "Napište titulek"),
  content: z.string().min(1, "Napište obsah"),
  date: z.string().datetime().optional(),
  excerpt: z.string().min(20, "Napište úryvek"),
  category: z.string().min(1, "Zvolte kategorii"),
  featured: z.boolean(),
  author: z.string().min(1, "Zvolte autora"),
});

export type PostsSchema = z.infer<typeof postsSchema>;
