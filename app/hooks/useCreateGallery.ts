import { GallerySchema } from "@/utils/gallery-schema";

export const useCreateGallery = async (data: GallerySchema) => {
  const url = "/api/dashboard/gallery";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Chyba při vytváření galerie");
  }
};
