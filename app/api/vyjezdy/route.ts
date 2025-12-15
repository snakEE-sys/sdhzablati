import { getVyjezdy } from "@/db/queries";

export async function GET() {
  try {
    const { vyjezdy } = await getVyjezdy();
    return new Response(JSON.stringify(vyjezdy));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch vyjezdy" }), {
      status: 500,
    });
  }
}
