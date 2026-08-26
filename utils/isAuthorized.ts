import { getServerSession } from "@/utils/auth-server";

export async function isAuthorized() {
  const session = await getServerSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  return session;
}
