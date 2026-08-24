import { z } from "zod/v4";

export const InterventionSchema = z.object({
  category: z.string().min(1, "Kategorie je povinná"),
  subCategory: z.string().min(1, "Podkategorie je povinná"),
  date: z.date({
    error: "Datum je povinné",
  }),
  time: z.string({
    error: "Čas je povinný",
  }),
  address: z.string().min(5, "Adresa je povinná"),
  description: z.string().min(50, "Popis musí mít alespoň 50 znaků"),
  deployment: z
    .array(
      z.object({
        unitId: z.uuid("Neplatné ID jednotky"),
        unitName: z.string(),
        vehicleId: z.uuid("Neplatné ID vozidla"),
        vehicleName: z.string(),
        quantity: z.int().min(1),
      }),
    )
    .min(1, "Musíte přidat alespoň jednu techniku"),
  images: z.array(z.instanceof(File)).catch([]).optional(),
});

export type InterventionValues = z.infer<typeof InterventionSchema>;
