import { z } from "zod/v4";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "Křestní jméno musí obsahovat aspoň 2 znaky" })
      .max(50, { message: "Křestní jméno nesmí obsahovat více než 50 znaků" }),

    lastName: z
      .string()
      .min(2, { message: "Příjmení musí obsahovat aspoň 2 znaky" })
      .max(50, { message: "Příjmení nesmí obsahovat více než 50 znaků" }),

    email: z.email({ message: "Prosím zadejte platnou e-mailovou adresu" }),

    password: z
      .string()
      .min(8, { message: "Heslo musí mít alespoň 8 znaků" })
      .max(50, { message: "Heslo nemůže být delší než 50 znaků" }),

    passwordConfirmation: z
      .string()
      .min(8, { message: "Heslo musí mít alespoň 8 znaků" })
      .max(50, { message: "Heslo nemůže být delší než 50 znaků" }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Zadané heslo se neshoduje.",
    path: ["passwordConfirmation"],
  });

export type SignUpSchemaValues = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z.email({ message: "Prosím zadejte platnou e-mailovou adresu" }),

  password: z
    .string()
    .min(8, { message: "Heslo musí mít alespoň 8 znaků" })
    .max(50, { message: "Heslo nemůže být delší než 50 znaků" }),
});
