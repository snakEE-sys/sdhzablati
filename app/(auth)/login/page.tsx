"use client";

import { signIn } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { signInSchema } from "@/utils/auth-schema";
import Image from "next/image";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthError from "@/app/components/errors/authError";
import { useState } from "react";
import { useAppForm } from "@/components/form";

export default function SignIn() {
  const router = useRouter();

  const [error, setError] = useState<string>();

  const form = useAppForm({
    formId: "signInForm",
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onBlur: signInSchema,
    },
    onSubmit: async ({ value }) =>
      await signIn.email({
        email: value.email,
        password: value.password,
        callbackURL: "/dashboard",
        fetchOptions: {
          onError: (ctx) => {
            setError("Nesprávný email nebo heslo");
            form.reset();
          },
          onSuccess: () => {
            router.push("/dashboard");
          },
        },
      }),
  });
  return (
    <div>
      <CardHeader>
        <Image
          src="/logo.png"
          alt="logo"
          width="70"
          height="70"
          className="mx-auto"
        />
        <CardTitle className="text-2xl">Přihlášení</CardTitle>
        <CardDescription>Zadej email a heslo pro přihlášení</CardDescription>
      </CardHeader>
      <CardContent className="mt-5">
        <form
          id="signInForm"
          className="flex flex-col space-y-2"
          onSubmit={(e) => {
            (e.preventDefault(), form.handleSubmit());
          }}
        >
          <form.AppField
            name="email"
            children={(field) => (
              <field.TextField
                label="E-mailová adresa"
                desc="Zadejte svou e-mailovou adresu"
                type="email"
              />
            )}
          />
          <form.AppField
            name="password"
            children={(field) => (
              <field.TextField
                label="Heslo"
                desc="Zadejte heslo"
                type="password"
              />
            )}
          />
          {error ? <AuthError error={error} /> : null}
          <form.AppForm>
            <form.SubmitButton>Přihlásit se</form.SubmitButton>
          </form.AppForm>
        </form>
      </CardContent>
    </div>
  );
}
