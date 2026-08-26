import { z } from "zod/v4";

export const postsSchema = z.object({
  title: z.string().min(20, "Titulek je povinný"),
  content: z.string().nonempty("Obsah je povinný"),
  categoryId: z.string().nonempty("Kategorie je povinná"),
  excerpt: z.string().min(20, "Úryvek je povinný"),
  featured: z
    .boolean()
    .nonoptional("Zadejte zda má být příspěvek připnutý či nikoliv"),
  published: z
    .boolean()
    .nonoptional(
      "Zadejte zda má být aktualita zveřejněna nebo pouze uložena do systému",
    ),
  image: z.instanceof(File).optional(),
});

export type PostsValues = z.infer<typeof postsSchema>;
