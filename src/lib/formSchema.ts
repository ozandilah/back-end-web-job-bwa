import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job Title is Required" })
    .min(3, { message: "Job Title must be least 3 characters" }),
  jobType: z.enum(JOBTYPES, { required_error: "You Need Select a Job Type" }),
  salaryFrom: z.string({ required_error: "Salary Form is Required" }),
  salaryTo: z.string({ required_error: "Salary To is Required" }),
  categoryId: z.string({ required_error: " You Need Select a Category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required Skill Must Be At Least 1 Skill" }),
  jobDescription: z
    .string({ required_error: "Job Description Is Required" })
    .min(10, { message: "Job Description Must Be At Least 10 Characters" }),
  responsibilitily: z
    .string({ required_error: "Responsibility Is Required" })
    .min(10, { message: "Responsibility Must Be At Least 10 Characters" }),
  whoYouAre: z
    .string({ required_error: "whoYouAre Is Required" })
    .min(10, { message: "whoYouAre Must Be At Least 10 Characters" }),
  niceToHaves: z
    .string({ required_error: "niceToHaves Is Required" })
    .min(10, { message: "niceToHaves Must Be At Least 10 Characters" }),
  benefits: z
    .object({
      benefit: z.string({ required_error: "Benefit is required." }),
      description: z.string({ required_error: "Description is required." }),
    })
    .array()
    .nonempty({ message: "Benefits Must Be At Least 1 Benefit" }),
});

export const overviewFormSchema = z.object({
  image: z
    .any()
    .refine((item: any) => item?.name, { message: "Image is required." }),
  name: z.string({ required_error: "Name is required." }),
  website: z.string({ required_error: "Website is required." }),
  location: z.string({ required_error: "Location is required." }),
  employee: z.string({ required_error: "Employee is required." }),
  industry: z.string({ required_error: "Industri is required." }),
  dateFounded: z.date({ required_error: "dateFounded is required." }),
  techStack: z
    .string({ required_error: "Tech Stack is required." })
    .array()
    .nonempty({ message: "Tech Stack must be a least 1 data" }),
  description: z.string({ required_error: "Description is required." }),
});

export const socialMediaFormSchema = z.object({
  facebook: z.string({ required_error: "Facebook link is required." }),
  instagram: z.string({ required_error: "Instagram link is required." }),
  linkidn: z.string({ required_error: "LinkIdn links is required." }),
  twitter: z.string({ required_error: "Twitter link is required." }),
  youtube: z.string({ required_error: "Youtube is required." }),
});

export const teamsFormSchema = z.object({
  name: z.string({ required_error: "Name is required." }),
  position: z.string({ required_error: "Position is required." }),
  instagram: z.string({ required_error: "Instagram is required." }),
  linkidn: z.string({ required_error: "LinkIdn is required." }),
});

export const signFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Email is not valid" }),
  password: z.string({ required_error: "Password is required." }),
});

export const signUpFormSchema = z.object({
  name: z.string({ required_error: "Name is required." }),
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Email is not valid" }),
  password: z.string({ required_error: "Password is required." }),
});
