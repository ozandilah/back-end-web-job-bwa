"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signFormSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
type Props = {};

const FormInputSign = (props: Props) => {
  const form = useForm<z.infer<typeof signFormSchema>>({
    resolver: zodResolver(signFormSchema),
  });
  const { toast } = useToast();
  const router = useRouter();
  const onSubmit = async (val: z.infer<typeof signFormSchema>) => {
    const authenticated = await signIn("credentials", {
      ...val,
      redirect: false,
    });
    if (authenticated?.error) {
      toast({
        title: "Error",
        description: "Email or Password maybe wrong!",
      });
      return;
    }
    await router.push("/");
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-5 space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  {...field}
                  type="password"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full">Sign In</Button>
        <div className="text-sm">
          Don't have a account{" "}
          <Link href="/signup" className="text-primary">
            Sign Up
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default FormInputSign;
