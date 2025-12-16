import { deleteVyjezd, getLastThreeVyjezdy, insertVyjezd } from "@/db/queries";
import { vyjezdySchema } from "@/utils/vyjezd-schema";
import { NextRequest } from "next/server";
import { z } from "zod";

// Create a new vyjezd
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedBody = vyjezdySchema.parse(body);
    const {
      category,
      subcategory,
      date,
      time,
      address,
      jednotky,
      technika,
      description,
    } = validatedBody;

    await insertVyjezd(
      date,
      time,
      description,
      address,
      category,
      subcategory,
      technika,
      jednotky
    );

    return new Response(
      JSON.stringify({ success: "Vyjezd successfully created" }),
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
      return new Response(JSON.stringify({ error: "Error creating vyjezd" }), {
        status: 500,
      });
    }
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
    await deleteVyjezd(Number(id));

    return new Response(null, { status: 204 }); // 204 No Content
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete vyjezd", errorMessage: (error as Error).message }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    // Get the last three vyjezdy from the database
    const { vyjezdy } = await getLastThreeVyjezdy();
    return new Response(JSON.stringify(vyjezdy));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch vyjezdy", errorMessage: (error as Error).message }), {
      status: 500,
    });
  }
}
