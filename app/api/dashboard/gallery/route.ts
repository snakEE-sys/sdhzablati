import { getAllImages } from "@/app/hooks/useCloudinary";

export async function GET() {
  try {
    const gallery = await getAllImages();
    return new Response(JSON.stringify(gallery));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch images" }), {
      status: 500,
    });
  }
}
