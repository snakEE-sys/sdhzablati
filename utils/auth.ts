import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/db";
import { user, account, session, verification } from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: user,
      account: account,
      session: session,
      verification: verification,
    },
  }),
  user: {
    additionalFields: {
      role: {
        type: ["Editor", "Administrátor"],
        required: true,
        defaultValue: "Editor",
        input: false,
      },
      description: {
        type: "string",
        required: false,
        input: true,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },

  plugins: [nextCookies()],
});
