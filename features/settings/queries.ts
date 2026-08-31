import "server-only";

import { headers } from "next/headers";
import { auth } from "@/features/auth/auth";

export async function getUsers() {
  const result = await auth.api.listUsers({
    query: {
      limit: 100,
      sortBy: "name",
      sortDirection: "asc",
    },
    headers: await headers(),
  });

  return result;
}
