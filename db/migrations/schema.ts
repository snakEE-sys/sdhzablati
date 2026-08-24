import { pgTable, text, uuid, date, timestamp, time, boolean, integer, index, foreignKey, primaryKey, unique } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const account = pgTable("account", {
	id: text().primaryKey(),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull(),
	userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" } ),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	idToken: text("id_token"),
	accessTokenExpiresAt: timestamp("access_token_expires_at"),
	refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
	scope: text(),
	password: text(),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
});

export const categories = pgTable("categories", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
});

export const interventionDeployments = pgTable("intervention_deployments", {
	id: uuid().defaultRandom().primaryKey(),
	interventionId: uuid("intervention_id").notNull().references(() => interventions.id, { onDelete: "cascade" } ),
	unitId: uuid("unit_id").notNull().references(() => units.id),
	vehicleId: uuid("vehicle_id").notNull().references(() => vehicles.id),
	quantity: integer().default(1).notNull(),
}, (table) => [
	index("intervention_id_idx").using("btree", table.interventionId.asc().nullsLast()),
	index("unit_id_idx").using("btree", table.unitId.asc().nullsLast()),
]);

export const interventions = pgTable("interventions", {
	id: uuid().defaultRandom().primaryKey(),
	date: date().notNull(),
	time: time().notNull(),
	description: text().notNull(),
	address: text().notNull(),
	createdAt: timestamp("created_at").default(sql`now()`).notNull(),
	subcategoryId: uuid("subcategory_id").notNull().references(() => subcategories.id),
});

export const posts = pgTable("posts", {
	id: uuid().defaultRandom().primaryKey(),
	slug: text().notNull(),
	title: text().notNull(),
	content: text().notNull(),
	createdAt: timestamp("created_at").default(sql`now()`).notNull(),
	updatedAt: timestamp("updated_at").default(sql`now()`).notNull(),
	authorId: text("author_id").notNull().references(() => user.id),
	categoryId: uuid("category_id").notNull().references(() => postsCategories.id),
	featured: boolean().default(false).notNull(),
	published: boolean().default(false).notNull(),
	excerpt: text().notNull(),
	image: text(),
}, (table) => [
	unique("posts_slug_unique").on(table.slug),]);

export const postsCategories = pgTable("posts_categories", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
});

export const session = pgTable("session", {
	id: text().primaryKey(),
	expiresAt: timestamp("expires_at").notNull(),
	token: text().notNull(),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" } ),
}, (table) => [
	unique("session_token_unique").on(table.token),]);

export const subcategories = pgTable("subcategories", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
	categoryId: uuid("category_id").notNull().references(() => categories.id),
}, (table) => [
	index("cat_id_idx").using("btree", table.categoryId.asc().nullsLast()),
]);

export const units = pgTable("units", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
});

export const user = pgTable("user", {
	id: text().primaryKey(),
	name: text().notNull(),
	email: text().notNull(),
	emailVerified: boolean("email_verified").notNull(),
	image: text(),
	createdAt: timestamp("created_at").notNull(),
	updatedAt: timestamp("updated_at").notNull(),
	role: text().default("Editor").notNull(),
	description: text(),
}, (table) => [
	unique("user_email_unique").on(table.email),]);

export const vehicles = pgTable("vehicles", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
});

export const verification = pgTable("verification", {
	id: text().primaryKey(),
	identifier: text().notNull(),
	value: text().notNull(),
	expiresAt: timestamp("expires_at").notNull(),
	createdAt: timestamp("created_at"),
	updatedAt: timestamp("updated_at"),
});
