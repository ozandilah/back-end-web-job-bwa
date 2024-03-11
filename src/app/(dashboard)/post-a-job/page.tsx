"use client";
import CKEditor from "@/components/organisms/CKEditor";
import FieldInput from "@/components/organisms/FieldInput";
import InputSkill from "@/components/organisms/InputSkills";
import InputBenefits from "@/components/organisms/inputBenefits";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { JOBTYPES } from "@/constants";
import { jobFormSchema } from "@/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {};

function PostJobPage({}: Props) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const form = useForm<z.infer<typeof jobFormSchema>>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      requiredSkills: [],
    },
  });
  const onSubmit = (val: z.infer<typeof jobFormSchema>) => {
    console.log(val);
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      <div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
        <ArrowLeftIcon className="w-7 h-7" />
        <span className="text-2xl font-semibold">Post a Job</span>
      </div>
      <div className="my-5">
        <div className="text-lg font-semibold">Basic Information</div>
        <div className="text-gray-400">
          List out your top perks and benefits
        </div>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 space-y-6 pt-6"
        >
          <FieldInput
            title="Job Title"
            subTitle="Job titles must be describe on position"
          >
            <FormField
              control={form.control}
              name="roles"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[450px]"
                      placeholder="e.g. Software Engineer"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>At Least 80 Characters</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput
            title="Type of Employment"
            subTitle="You can select multiple type of employment"
          >
            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {JOBTYPES.map((item: string, i: number) => (
                        <FormItem
                          key={item + i}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem value={item} />
                          </FormControl>
                          <FormLabel className="font-normal">{item}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>

          <FieldInput
            title="Salary"
            subTitle="Please specify the estimed salary range for the role."
          >
            <div className="w-[450px] flex flex-row justify-between items-center">
              <FormField
                control={form.control}
                name="salaryFrom"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="w-full" placeholder="$100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="text-center">To</span>
              <FormField
                control={form.control}
                name="salaryTo"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="$1000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FieldInput>
          <FieldInput
            title="Categories"
            subTitle="You can select  job categories"
          >
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Job Categories</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[450px]">
                        <SelectValue placeholder="Select Job Categories" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </FieldInput>
          <FieldInput
            title="Required Skills"
            subTitle="Add required skills for the job"
          >
            <InputSkill form={form} name="requiredSkills" label="Add Skills" />
          </FieldInput>
          <FieldInput
            title="Job Descriptions"
            subTitle="Job titles must be describe one position"
          >
            <CKEditor
              form={form}
              name="jobDescription"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Responsibilities"
            subTitle="Outline the core responsibilities of the position"
          >
            <CKEditor
              form={form}
              name="responsibilitily"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Who You Are"
            subTitle="Add your preferred candidates qualifications"
          >
            <CKEditor
              form={form}
              name="whoYouAre"
              editorLoaded={editorLoaded}
            />
          </FieldInput>
          <FieldInput
            title="Nice-To-Haves"
            subTitle="Add nice-to-have skills and qualifications for the role to encurage a more diverse set of candidates to apply"
          >
            <CKEditor
              form={form}
              name="niceToHaves"
              editorLoaded={editorLoaded}
            />
          </FieldInput>

          <FieldInput
            title="Perks and Benefits"
            subTitle="Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees"
          >
            <InputBenefits form={form} />
          </FieldInput>
          <div className="flex justify-end">
            <Button size="lg">Do a Review</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default PostJobPage;
