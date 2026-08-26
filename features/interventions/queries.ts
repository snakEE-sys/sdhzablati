import "server-only";

import { db } from "@/db/db";
import { categories, subcategories, units, vehicles } from "@/db/schema";
import { cacheTag } from "next/cache";
import { tryCatch } from "@/lib/utils/try-catch";
import { InterventionResponse } from "./types";

export async function getCategories() {
  "use cache";
  cacheTag("intervention_categories");
  return await db.select().from(categories);
}
export async function getSubcategories() {
  "use cache";
  cacheTag("intervention_subcategories");
  return await db.select().from(subcategories);
}
export async function getUnits() {
  "use cache";
  cacheTag("units");
  return await db.select().from(units);
}
export async function getVehicles() {
  "use cache";
  cacheTag("vehicles");
  return await db.select().from(vehicles);
}

export async function getInterventions(options: {
  limit: number;
  offset?: number;
  orderBy?: "asc" | "desc";
}) {
  "use cache";
  cacheTag("interventions");

  const { data: interventions, error } = await tryCatch(
    db.query.interventions.findMany({
      orderBy: { date: options?.orderBy },
      limit: options.limit,
      with: {
        interventionDeployments: {
          with: {
            unit: true,
            vehicle: true,
          },
        },
        category: true,
        subcategory: true,
      },
    }),
  );

  if (error) throw error;
  if (!interventions) return [];

  return interventions.map((intervention) => ({
    id: intervention.id,
    subCategory: intervention.subcategory,
    category: intervention.category,
    date: intervention.date,
    time: intervention.time,
    address: intervention.address,
    description: intervention.description,
    deployment: intervention.interventionDeployments.map((d) => ({
      id: d.id,
      unit: d.unit,
      vehicle: d.vehicle,
      quantity: d.quantity,
    })),
  }));
}

export async function getInterventionById(
  id: string,
): Promise<InterventionResponse | null> {
  "use cache";

  cacheTag(`intervention-${id}`);

  const { data: intervention, error } = await tryCatch(
    db.query.interventions.findFirst({
      where: {
        id: {
          eq: id,
        },
      },
      with: {
        interventionDeployments: {
          with: {
            unit: true,
            vehicle: true,
          },
        },
        category: true,
        subcategory: true,
      },
    }),
  );

  if (error) throw error;
  if (!intervention) return null;

  return {
    id: intervention.id,
    subCategory: intervention.subcategory,
    category: intervention.category,
    date: intervention.date,
    time: intervention.time,
    address: intervention.address,
    description: intervention.description,
    deployment: intervention.interventionDeployments.map((d) => ({
      id: d.id,
      unit: d.unit,
      vehicle: d.vehicle,
      quantity: d.quantity,
    })),
  };
}
