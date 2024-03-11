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
import { Metadata } from "next";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInputSign from "./formInput";

type Props = {};
export const metadata: Metadata = {
  title: "Sign In",
  description: "Generated by create next app",
};
const SignInPage = (props: Props) => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="border border-border p-5">
          <div className="font-semibold text-center text-2xl mb-2">
            Login your account
          </div>
          <div className="text-sm text-gray500">
            Enter you email to access dashboard
          </div>
          <FormInputSign />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;