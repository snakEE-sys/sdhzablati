import cloudinary from "@/lib/cloudinary";
import { getServerSession } from "@/features/auth/auth-server";
import { tryCatch } from "@/lib/utils/try-catch";

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: body, error } = await tryCatch(req.json());
  if (error || !body.folder) {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const timestamp = Math.round(new Date().getTime() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      folder: body.folder,
    },
    process.env.CLOUDINARY_API_SECRET!,
  );

  return Response.json({
    signature,
    timestamp,
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
  });
}
