import React, { useState } from "react";
import DialogAddBenefits from "./DialogAddBenefit";
import { PartyPopper, X } from "lucide-react";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";

type Props = {
  form: any;
};

const InputBenefits = (props: Props) => {
  const [benefits, setBenefits] = useState<any[]>([]);
  const deleteBenefit = (item: any) => {
    const deleteBenefits = benefits.filter((benefit: any) => item !== benefit);
    setBenefits([...deleteBenefits]);
    props.form.setValue("benefits", deleteBenefits);
  };

  const updateBenefit = (item: any) => {
    const newValue: any[] = [...benefits, item];
    setBenefits(newValue);
    props.form.setValue("benefits", newValue);
  };
  return (
    <div className="block">
      <DialogAddBenefits updateBenefit={updateBenefit} />
      <div className="grid grid-cols-3 gap-5 mt-5">
        {benefits?.map((item: any, i: number) => (
          <div
            className="border border-gray-200 rounded-sm p-3 relative w-[200px]"
            key={i}
          >
            <PartyPopper className="w-7 h-7 mb-5 text-primary" />
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => deleteBenefit(item)}
            >
              <X className="w-6 h-6" />
            </div>
            <div className="text-xl font-semibold mb-3">{item.benefit}</div>
            <div className="text-gray-500 text-sm">{item.description}</div>
          </div>
        ))}
      </div>
      <FormField
        control={props.form.control}
        name="benefits"
        render={({ field }) => (
          <FormItem>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputBenefits;
