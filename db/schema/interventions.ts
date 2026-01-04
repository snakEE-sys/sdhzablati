import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  integer,
  date,
  time,
  timestamp,
  uuid,
  index,
} from "drizzle-orm/pg-core";

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
  (table) => [index("cat_id_idx").on(table.categoryId)]
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
  date: date("date").notNull(),
  time: time("time").notNull(),
  description: text("description").notNull(),
  address: text("address").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
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
  ]
);

export const categoryRelations = relations(categories, ({ many }) => ({
  subcategories: many(subcategories),
}));

export const subcategoriesRelations = relations(subcategories, ({ one }) => ({
  category: one(categories, {
    fields: [subcategories.categoryId],
    references: [categories.id],
  }),
}));

export const deploymentRelations = relations(
  interventionDeployments,
  ({ one }) => ({
    unit: one(units, {
      fields: [interventionDeployments.unitId],
      references: [units.id],
    }),
    vehicle: one(vehicles, {
      fields: [interventionDeployments.vehicleId],
      references: [vehicles.id],
    }),
    intervention: one(interventions, {
      fields: [interventionDeployments.interventionId],
      references: [interventions.id],
    }),
  })
);
export const unitRelations = relations(units, ({ many }) => ({
  // This is what allows db.query.units.findMany({ with: { vehicles: true } })
  // However, wait—in your schema, vehicles and units are separate.
  // Are vehicles linked to units in your DB?
  deployments: many(interventionDeployments),
}));

export const interventionsRelations = relations(
  interventions,
  ({ one, many }) => ({
    subcategory: one(subcategories, {
      fields: [interventions.subcategoryId],
      references: [subcategories.id],
    }),
    deployments: many(interventionDeployments),
  })
);
