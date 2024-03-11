import { Separator } from "@/components/ui/separator";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  subTitle: string;
};

const FieldInput = (props: Props) => {
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="w-[35%]">
          <div className="font-semibold">{props.title}</div>
          <div className="text-gray-400 w-80">{props.subTitle}</div>
        </div>
        {props.children}
      </div>
      <Separator />
    </>
  );
};

export default FieldInput;
