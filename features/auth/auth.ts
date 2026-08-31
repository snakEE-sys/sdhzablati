import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/db";
import { user, account, session, verification } from "@/db/schema";
import { admin as adminPlugin } from "better-auth/plugins";
import { ac, admin, dashboardUser } from "./permissions";

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

  plugins: [
    adminPlugin({
      ac,
      roles: {
        admin,
        dashboardUser,
      },
    }),
    nextCookies(),
  ],
});
