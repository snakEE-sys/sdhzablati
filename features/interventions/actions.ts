"use server";

import { db } from "@/db/db";
import { InterventionValues } from "./schema";
import { tryCatch } from "@/lib/utils/try-catch";
import {
  categories,
  interventionDeployments,
  interventions,
  subcategories,
} from "@/db/schema";
import { updateTag } from "next/cache";
import { eq } from "drizzle-orm";
import { requirePermission } from "../auth/authorization";

export async function createIntervention(intervention: InterventionValues) {
  await requirePermission({ intervention: ["create"] });

  const { error } = await tryCatch(
    db.transaction(async (tx) => {
      const [newIntervention] = await tx
        .insert(interventions)
        .values({
          date: intervention.date,
          time: intervention.time,
          description: intervention.description,
          address: intervention.address,
          categoryId: intervention.category,
          subcategoryId: intervention.subCategory,
        })
        .returning();

      const deploymentValues = intervention.deployment.map((d) => ({
        interventionId: newIntervention.id,
        unitId: d.unitId,
        vehicleId: d.vehicleId,
        quantity: d.quantity,
      }));

      await tx.insert(interventionDeployments).values(deploymentValues);
    }),
  );
  if (error) throw error;

  updateTag("interventions");
  return { success: true };
}

export async function editIntervention(
  interventionId: string,
  intervention: InterventionValues,
) {
  await requirePermission({ intervention: ["edit"] });

  const { error } = await tryCatch(
    db.transaction(async (tx) => {
      await tx
        .update(interventions)
        .set({
          date: intervention.date,
          time: intervention.time,
          description: intervention.description,
          address: intervention.address,
          categoryId: intervention.category,
          subcategoryId: intervention.subCategory,
        })
        .where(eq(interventions.id, interventionId));

      await tx
        .delete(interventionDeployments)
        .where(eq(interventionDeployments.interventionId, interventionId));

      const deploymentValues = intervention.deployment.map((d) => ({
        interventionId,
        unitId: d.unitId,
        vehicleId: d.vehicleId,
        quantity: d.quantity,
      }));

      if (deploymentValues.length > 0) {
        await tx.insert(interventionDeployments).values(deploymentValues);
      }
    }),
  );

  if (error) return error;

  updateTag(`intervention-${interventionId}`);
  updateTag("interventions");

  return { success: true };
}

export async function deleteIntervention(id: string) {
  await requirePermission({ intervention: ["delete"] });

  const { error } = await tryCatch(
    db.delete(interventions).where(eq(interventions.id, id)),
  );
  if (error) return error;

  updateTag("interventions");
  return { success: true };
}

export async function createInterventionCategory(name: string) {
  await requirePermission({ settings: ["create"] });

  const { error } = await tryCatch(
    db.insert(categories).values({
      name,
    }),
  );

  if (error) throw error;
  updateTag("intervention_categories");

  return { success: true };
}

export async function editInterventionCategory(id: string, name: string) {
  await requirePermission({ settings: ["update"] });

  const { error } = await tryCatch(
    db
      .update(categories)
      .set({
        name,
      })
      .where(eq(categories.id, id)),
  );

  if (error) throw error;
  updateTag("intervention_categories");

  return { success: true };
}

export async function deleteInterventionCategory(id: string) {
  await requirePermission({ settings: ["delete"] });

  const { error } = await tryCatch(
    db.delete(categories).where(eq(categories.id, id)),
  );

  if (error) throw error;
  updateTag("intervention_categories");

  return { success: true };
}

export async function createInterventionSubcategory(
  name: string,
  categoryId: string,
) {
  await requirePermission({ settings: ["create"] });

  const { error } = await tryCatch(
    db.insert(subcategories).values({
      name,
      categoryId,
    }),
  );

  if (error) throw error;
  updateTag("intervention_subcategories");

  return { success: true };
}

export async function editInterventionSubcategory(
  categoryId: string,
  name: string,
  id: string,
) {
  await requirePermission({ settings: ["update"] });

  const { error } = await tryCatch(
    db
      .update(subcategories)
      .set({
        name,
        categoryId,
      })
      .where(eq(subcategories.id, id)),
  );

  if (error) throw error;
  updateTag("intervention_categories");

  return { success: true };
}

export async function deleteInterventionSubcategory(id: string) {
  await requirePermission({ settings: ["delete"] });

  const { error } = await tryCatch(
    db.delete(subcategories).where(eq(subcategories.id, id)),
  );

  if (error) throw error;
  updateTag("intervention_subcategories");

  return { success: true };
}
