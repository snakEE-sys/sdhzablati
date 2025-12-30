"use client";

import { signUp } from "@/utils/auth-client";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { formSchema } from "@/utils/auth-schema"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {CardDescription, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {useState} from "react";
import Image from "next/image";
import AuthError from "@/app/components/errors/authError";

const SignUp = () => {
    const router = useRouter();

    const [error, setError] = useState<string>();


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        },
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function onSubmit(values: z.infer<typeof formSchema>) {
        await signUp.email({
            email: form.getValues("email"),
            password: form.getValues("password"),
            name: form.getValues("firstName") + " " + form.getValues("lastName"),
            callbackURL: "/dashboard",
            fetchOptions: {
                onError: (ctx) => {
                    setError(ctx.error.message);
                },
                onSuccess: () => {
                    router.push("/dashboard");
                },
            },
        });
    }

    return (
        <div>
            <CardHeader>
            <Image src="/logo.png" alt="logo" width="70" height="70" className="mx-auto"/>
            <CardTitle className="text-2xl">Registrace</CardTitle>
            <CardDescription>
                Vyplň údaje pro registraci
            </CardDescription>
        </CardHeader>
        <CardContent className='mt-4'>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Křestní jméno</FormLabel>
                            <FormControl>
                                <Input placeholder="Jan" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Příjmení</FormLabel>
                            <FormControl>
                                <Input placeholder="Novák" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

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
                <FormField
                    control={form.control}
                    name="passwordConfirmation"
                    render={({ field }) => (
                        <FormItem className="grid gap-2">
                            <FormLabel>Potvrzení hesla</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {error ? <AuthError message={error}/> : null}
                <Button type="submit">Registrovat se</Button>
            </form>
        </Form>
        </CardContent>
        </div>
    )
}
export default SignUp;