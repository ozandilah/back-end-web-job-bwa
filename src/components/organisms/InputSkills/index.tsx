import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { jobFormSchema } from "@/lib/formSchema";
import { PlusIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type Props = {
  form: any;
  name: string;
  label: string;
};

const InputSkill = (props: Props) => {
  const [isHide, setHide] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSaveValue = () => {
    const value = inputRef.current?.value;
    if (value === "") {
      return;
    }

    const newValue: any = [...values, value];
    setValues(newValue);
    props.form.setValue(props.name, newValue);
  };
  const handleDeleteValue = (item: string) => {
    const skills: any = values.filter((value: string) => item !== value);
    setValues(skills);
    props.form.setValue(props.name, skills);
  };
  return (
    <FormField
      control={props.form.control}
      name={props.name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="block">{props.label}</FormLabel>
            <FormControl>
              <>
                <Button
                  type="button"
                  variant="outline"
                  className="mb-2"
                  onClick={() => setHide(!isHide)}
                >
                  <PlusIcon className="w-4 h-4 mr-2" />
                  Add Skill
                </Button>
                {isHide && (
                  <div className="my-4 flex flex-row gap-4">
                    <Input ref={inputRef} className="w-[246px]" />
                    <Button type="button" onClick={handleSaveValue}>
                      Save
                    </Button>
                  </div>
                )}
                <div className="space-x-3">
                  {values.map((item: string, key: number) => (
                    <Badge
                      variant="outline"
                      key={key}
                      onClick={() => handleDeleteValue(item)}
                    >
                      {item}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Badge>
                  ))}
                </div>
              </>
            </FormControl>

            <FormMessage />
          </FormItem>
        );
      }}
    ></FormField>
  );
};

export default InputSkill;
