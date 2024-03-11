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

type Props = {};

const FormInputSign = (props: Props) => {
  const form = useForm<z.infer<typeof signFormSchema>>({
    resolver: zodResolver(signFormSchema),
  });
  const onSubmit = (val: z.infer<typeof signFormSchema>) => {
    console.log(val);
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
