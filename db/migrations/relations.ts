import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
	account: {
		user: r.one.user({
			from: r.account.userId,
			to: r.user.id
		}),
	},
	user: {
		accounts: r.many.account(),
		postsCategories: r.many.postsCategories({
			from: r.user.id.through(r.posts.authorId),
			to: r.postsCategories.id.through(r.posts.categoryId)
		}),
		sessions: r.many.session(),
	},
	interventionDeployments: {
		intervention: r.one.interventions({
			from: r.interventionDeployments.interventionId,
			to: r.interventions.id
		}),
		unit: r.one.units({
			from: r.interventionDeployments.unitId,
			to: r.units.id
		}),
		vehicle: r.one.vehicles({
			from: r.interventionDeployments.vehicleId,
			to: r.vehicles.id
		}),
	},
	interventions: {
		interventionDeployments: r.many.interventionDeployments(),
		subcategory: r.one.subcategories({
			from: r.interventions.subcategoryId,
			to: r.subcategories.id
		}),
	},
	units: {
		interventionDeployments: r.many.interventionDeployments(),
	},
	vehicles: {
		interventionDeployments: r.many.interventionDeployments(),
	},
	subcategories: {
		interventions: r.many.interventions(),
		category: r.one.categories({
			from: r.subcategories.categoryId,
			to: r.categories.id
		}),
	},
	postsCategories: {
		users: r.many.user(),
	},
	session: {
		user: r.one.user({
			from: r.session.userId,
			to: r.user.id
		}),
	},
	categories: {
		subcategories: r.many.subcategories(),
	},
}))