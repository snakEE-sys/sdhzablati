import { relations } from "drizzle-orm";
import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  date,
  time,
  timestamp,
  primaryKey,
} from "drizzle-orm/pg-core";

export const vyjezd = pgTable("vyjezd", {
  id: serial("id").primaryKey(),
  date: date("date").notNull(),
  time: time("time").notNull(),
  description: text("description").notNull(),
  address: text("address").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  categoryId: integer("category_id").references(() => categories.id, {
    onDelete: "cascade",
  }),
  subcategoryId: integer("subcategory_id").references(() => subcategories.id),
});

export const vyjezdRelations = relations(vyjezd, ({ one, many }) => ({
  category: one(categories, {
    fields: [vyjezd.categoryId],
    references: [categories.id],
  }),
  subcategory: one(subcategories, {
    fields: [vyjezd.subcategoryId],
    references: [subcategories.id],
  }),
  vyjezdToTechnika: many(vyjezdToTechnika),
  vyjezdToJednotky: many(vyjezdToJednotky),
}));

export const jednotky = pgTable("jednotky", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});

export const jednotkyRelations = relations(jednotky, ({ many }) => ({
  vyjezdToJednotky: many(vyjezdToJednotky),
}));

export const technika = pgTable("technika", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});

export const technikaRelations = relations(technika, ({ many }) => ({
  vyjezdToTechnika: many(vyjezdToTechnika),
}));

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  subcategories: many(subcategories),
  vyjezds: many(vyjezd),
}));

export const subcategories = pgTable("subcategories", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categories.id, { onDelete: "cascade" }),
});

export const subcategoriesRelations = relations(subcategories, ({ one }) => ({
  category: one(categories, {
    fields: [subcategories.categoryId],
    references: [categories.id],
  }),
}));

export const vyjezdToTechnika = pgTable("vyjezdToTechnika", {
  vyjezdId: integer("vyjezd_id")
    .notNull()
    .references(() => vyjezd.id, { onDelete: "cascade" }),
  technikaId: integer("technika_id")
    .notNull()
    .references(() => technika.id, { onDelete: "cascade" }),
});

export const vyjezdToTechnikaRelations = relations(
  vyjezdToTechnika,
  ({ one }) => ({
    vyjezd: one(vyjezd, {
      fields: [vyjezdToTechnika.vyjezdId],
      references: [vyjezd.id],
    }),
    technika: one(technika, {
      fields: [vyjezdToTechnika.technikaId],
      references: [technika.id],
    }),
  })
);

export const vyjezdToJednotky = pgTable(
  "vyjezdToJednotky",
  {
    vyjezdId: integer("vyjezd_id")
      .notNull()
      .references(() => vyjezd.id, { onDelete: "cascade" }),
    jednotkyId: integer("jednotky_id")
      .notNull()
      .references(() => jednotky.id, { onDelete: "cascade" }),
  },
  (table) => [primaryKey({ columns: [table.vyjezdId, table.jednotkyId] })]
);

export const vyjezdToJednotkyRelations = relations(
  vyjezdToJednotky,
  ({ one }) => ({
    vyjezd: one(vyjezd, {
      fields: [vyjezdToJednotky.vyjezdId],
      references: [vyjezd.id],
    }),
    jednotky: one(jednotky, {
      fields: [vyjezdToJednotky.jednotkyId],
      references: [jednotky.id],
    }),
  })
);

export const images = pgTable("images", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  vyjezdId: integer("vyjezd_id")
    .notNull()
    .references(() => vyjezd.id, { onDelete: "cascade" }),
});

export const imagesRelations = relations(images, ({ one }) => ({
  vyjezd: one(vyjezd, {
    fields: [images.vyjezdId],
    references: [vyjezd.id],
  }),
}));
