import { VyjezdSchema } from "@/utils/vyjezd-schema";

export const createVyjezd = async (data: VyjezdSchema) => {
  const dbUrl = `/api/dashboard/vyjezdy`;
  const dbRes = await fetch(dbUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!dbRes.ok) {
    throw new Error("Chyba při vytváření výjezdu");
  }
};
