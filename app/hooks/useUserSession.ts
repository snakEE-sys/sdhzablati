import { authClient } from "@/utils/auth-client"; // import the auth client

export function useUserSession() {
  const { data: user } = authClient.useSession();

  return user;
}
