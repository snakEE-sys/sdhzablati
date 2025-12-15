import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  categoryId: integer("category_id")
    .notNull()
    .references(() => posts_categories.id, {
      onDelete: "cascade",
    }),
  featured: boolean("featured").notNull().default(false),
  excerpt: text("excerpt").notNull(),
  image: varchar("image", { length: 255 }),
  author: varchar("author", { length: 255 }).notNull(),
});
export const posts_categories = pgTable("posts_categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});

export const postsRelations = relations(posts, ({ one }) => ({
  category: one(posts_categories, {
    fields: [posts.categoryId],
    references: [posts_categories.id],
  }),
}));
