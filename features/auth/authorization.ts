import { auth } from "./auth";
import { getServerSession } from "./auth-server";
import { authClient } from "./auth-client";

type Permission = {
  [resource: string]: string[];
};

export async function requirePermission(permissions: Permission) {
  const session = await getServerSession();

  if (!session) {
    throw new Error("Unauthenticated");
  }

  const result = await auth.api.userHasPermission({
    body: {
      userId: session.user.id,
      permissions,
    },
  });

  if (!result.success) {
    throw new Error("Forbidden");
  }

  return session;
}

export async function hasPermission(userId: string, permissions: Permission) {
  const { data, error } = await authClient.admin.hasPermission({
    userId,
    permissions,
  });

  if (error) {
    throw new Error("Forbidden");
  }

  return data?.success ?? false;
}
