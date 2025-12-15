"use client";

import { signIn } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signInFormSchema } from "@/utils/auth-schema";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthError from "@/app/components/errors/authError";
import { useState } from "react";

export default function SignIn() {
  const router = useRouter();

  const [error, setError] = useState<string>();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    await signIn.email({
      email: form.getValues("email"),
      password: form.getValues("password"),
      callbackURL: "/dashboard",
      fetchOptions: {
        onError: (ctx) => {
          setError("Nesprávný email nebo heslo");
          console.log(ctx.error.message);
          form.reset();
        },
        onSuccess: () => {
          router.push("/dashboard");
        },
      },
    });
    console.log(values);
  }
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jan.novak@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Heslo</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error ? <AuthError message={error} /> : null}
            <Button type="submit">Přihlásit se</Button>
            <div className="mt-4 text-center text-sm">
              Nemáš ještě účet?{" "}
              <a href="/auth/sign-up" className="underline underline-offset-4">
                Registrovat se
              </a>
            </div>
          </form>
        </Form>
      </CardContent>
    </div>
  );
}
