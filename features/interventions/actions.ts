"use server";

import { db } from "@/db/db";
import { InterventionValues } from "./schema";
import { tryCatch } from "@/lib/utils/try-catch";
import { interventionDeployments, interventions } from "@/db/schema";
import { updateTag } from "next/cache";
import { eq } from "drizzle-orm";
import { isAuthorized } from "@/utils/isAuthorized";

export async function createIntervention(intervention: InterventionValues) {
  await isAuthorized();

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
  await isAuthorized();

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
  await isAuthorized();

  const { error } = await tryCatch(
    db.delete(interventions).where(eq(interventions.id, id)),
  );
  if (error) return error;

  updateTag("interventions");
  return { success: true };
}
