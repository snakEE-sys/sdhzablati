import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as vyjezdSchema from "@/db/schema/vyjezd";
import * as postsSchema from "@/db/schema/posts";
import * as authSchema from "@/db/schema/authSchema";

const schema = {
  ...vyjezdSchema,
  ...authSchema,
  ...postsSchema,
};
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
