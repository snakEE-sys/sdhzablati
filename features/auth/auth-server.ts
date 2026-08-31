import { auth } from "./auth";
import { headers } from "next/headers";

export async function getServerSession() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}

export async function requireAuth() {
  const session = await getServerSession();

  if (!session) {
    throw new Error("Unauthenticated");
  }

  return session;
}
