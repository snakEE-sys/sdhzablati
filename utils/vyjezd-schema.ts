import { z } from "zod";

export const vyjezdySchema = z.object({
  id: z.string().optional(),
  category: z.string().min(1, "* Zvolte kategorií"),
  subcategory: z.string().min(1, "* Zvolte podkategorií"),
  address: z.string().min(1, "* Adresa nesmí být prázdná"),
  date: z.string().datetime("* Zvolte datum"),
  time: z.string().min(1, "*Zvolte čas"),
  description: z.string().min(1, "* Napište popis"),
  images: z
    .array(z.instanceof(File))
    .max(4, "* Maximálně 4 obrázky")
    .optional(), // Array of File objects
  jednotky: z.string().array().min(1, "* Zvolte alespoň jednu jednotku"),
  technika: z.string().array().min(1, "* Zvolte alespoň jednu techniku"),
});

export type VyjezdSchema = z.infer<typeof vyjezdySchema>;
