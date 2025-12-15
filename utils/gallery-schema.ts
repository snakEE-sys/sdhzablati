import { z } from "zod";

export const gallerySchema = z.object({
  title: z.string().min(1),
  images: z.array(z.instanceof(File)),
});

export type GallerySchema = z.infer<typeof gallerySchema>;
