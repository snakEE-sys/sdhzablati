"use server";

import { getServerSession } from "@/utils/auth-server";
import { db } from "@/db/db";
import { InterventionValues } from "./schema";
import { tryCatch } from "@/lib/utils/try-catch";
import { interventionDeployments, interventions } from "@/db/schema";
import { revalidatePath, revalidateTag, updateTag } from "next/cache";
import { eq } from "drizzle-orm";

export async function createIntervention(intervention: InterventionValues) {
  const session = await getServerSession();
  if (!session) throw new Error("Unauthorized");

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

  revalidatePath("/dashboard/interventions");
  return { success: true };
}

export async function editIntervention(
  interventionId: string,
  intervention: InterventionValues,
) {
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
  const { error } = await tryCatch(
    db.delete(interventions).where(eq(interventions.id, id)),
  );
  if (error) return error;

  updateTag("interventions");
  return { success: true };
}
