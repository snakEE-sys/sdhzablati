import { sql } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  boolean,
  index,
  uniqueIndex,
  integer,
  date,
  time,
  uuid,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  role: text("role", { enum: ["Editor", "Administrátor"] })
    .default("Editor")
    .notNull(),
  description: text("description").notNull(),
});

export const session = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expires_at").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
    ipAddress: text("ip_address"),
    userAgent: text("user_agent"),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
  },
  (table) => [index("session_userId_idx").on(table.userId)],
);

export const account = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    issuer: text("issuer").notNull(),
    accountId: text("account_id").notNull(),
    providerId: text("provider_id").notNull(),
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text("access_token"),
    refreshToken: text("refresh_token"),
    idToken: text("id_token"),
    accessTokenExpiresAt: timestamp("access_token_expires_at"),
    refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [
    uniqueIndex("account_issuer_accountId_uidx").on(
      table.issuer,
      table.accountId,
    ),
    index("account_userId_idx").on(table.userId),
  ],
);

export const verification = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => /* @__PURE__ */ new Date())
      .notNull(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)],
);

export const categories = pgTable("categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
});

export const subcategories = pgTable(
  "subcategories",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    categoryId: uuid("category_id")
      .notNull()
      .references(() => categories.id),
  },
  (table) => [index("cat_id_idx").on(table.categoryId)],
);

export const units = pgTable("units", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
});

export const vehicles = pgTable("vehicles", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
});

export const interventions = pgTable("interventions", {
  id: uuid("id").defaultRandom().primaryKey(),
  date: date("date", { mode: "date" }).notNull(),
  time: time("time").notNull(),
  description: text("description").notNull(),
  address: text("address").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  categoryId: uuid("category_id")
    .notNull()
    .references(() => categories.id),
  subcategoryId: uuid("subcategory_id")
    .notNull()
    .references(() => subcategories.id),
});

export const interventionDeployments = pgTable(
  "intervention_deployments",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    interventionId: uuid("intervention_id")
      .notNull()
      .references(() => interventions.id, { onDelete: "cascade" }),
    unitId: uuid("unit_id")
      .notNull()
      .references(() => units.id),
    vehicleId: uuid("vehicle_id")
      .notNull()
      .references(() => vehicles.id),
    quantity: integer("quantity").default(1).notNull(),
  },
  (table) => [
    index("intervention_id_idx").on(table.interventionId),
    index("unit_id_idx").on(table.unitId),
  ],
);

export const posts_categories = pgTable("posts_categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
});

export const posts = pgTable(
  "posts",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    slug: text("slug").notNull().unique(),
    title: text("title").notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
    authorId: text("author_id")
      .notNull()
      .references(() => user.id),
    categoryId: uuid("category_id")
      .notNull()
      .references(() => posts_categories.id),
    featured: boolean("featured").notNull().default(false),
    published: boolean("published").notNull().default(false),
    excerpt: text("excerpt").notNull(),
    image: text("image"),
  },
  (table) => [
    uniqueIndex("one_featured_post")
      .on(table.featured)
      .where(sql`${table.featured} = true`),
  ],
);
