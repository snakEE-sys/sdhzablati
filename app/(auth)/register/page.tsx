"use client";

import { signUp } from "@/features/auth/auth-client";
import { useRouter } from "next/navigation";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import AuthError from "@/app/components/errors/authError";

import { useAppForm } from "@/components/form";
import { signUpSchema } from "@/features/auth/auth-schema";

const SignUp = () => {
  const router = useRouter();
  const [error, setError] = useState<string>();

  const form = useAppForm({
    formId: "signUpForm",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validators: {
      onBlur: signUpSchema,
    },
    onSubmit: async ({ value }) => {
      /* await signUp.email({
        email: value.email,
        password: value.password,
        name: value.firstName + " " + value.lastName,
        callbackURL: "/dashboard",
        fetchOptions: {
          onError: (ctx) => {
            setError(ctx.error.message);
          },
          onSuccess: () => {
            router.push("/dashboard");
          },
        },
      })*/
    },
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
        <CardTitle className="text-2xl">Registrace</CardTitle>
        <CardDescription>Vyplň údaje pro registraci</CardDescription>
      </CardHeader>
      <CardContent className="mt-4">
        <form
          id="signUpForm"
          className="flex flex-col space-y-2"
          onSubmit={(e) => {
            (e.preventDefault(), form.handleSubmit());
          }}
        >
          <form.AppField
            name="firstName"
            children={(field) => (
              <field.TextField
                label="Jméno"
                desc="Zadejte své jméno"
                type="text"
              />
            )}
          />

          <form.AppField
            name="lastName"
            children={(field) => (
              <field.TextField
                label="Příjmení"
                desc="Zadejte své příjmení"
                type="text"
              />
            )}
          />

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
          <form.AppField
            name="passwordConfirmation"
            children={(field) => (
              <field.TextField
                label="Potvrzení hesla"
                desc="Zadejte znovu heslo"
                type="password"
              />
            )}
          />
          {error ? <AuthError error={error} /> : null}
          <form.AppForm>
            <form.SubmitButton>Registrovat</form.SubmitButton>
          </form.AppForm>
        </form>
      </CardContent>
    </div>
  );
};
export default SignUp;
