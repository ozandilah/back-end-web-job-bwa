"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { socialMediaFormSchema, teamsFormSchema } from "@/lib/formSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {};

const DialogAddTeam = (props: Props) => {
  const form = useForm<z.infer<typeof teamsFormSchema>>({
    resolver: zodResolver(teamsFormSchema),
  });

  const onSubmit = (val: z.infer<typeof teamsFormSchema>) => {
    console.log(val);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Member
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new team</DialogTitle>
          <DialogDescription>Fill the field add new team</DialogDescription>
        </DialogHeader>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input placeholder="Position" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="instagram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram</FormLabel>
                    <FormControl>
                      <Input placeholder="Instagram" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkidn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkIdn</FormLabel>
                    <FormControl>
                      <Input placeholder="LinkIdn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button size="lg">Save</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddTeam;
