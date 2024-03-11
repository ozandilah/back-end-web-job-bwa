import FieldInput from "@/components/organisms/FieldInput";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import DialogAddTeam from "./DialogAddTeam";

type Props = {};

const TeamForms = (props: Props) => {
  return (
    <FieldInput
      title="Basic Information"
      subTitle="Add teams members of your company"
    >
      <div className="w-[65%] mb-5">
        <div className="flex flex-row justify-between items-center">
          <div className="text-lg font-semibold">2 Member</div>
          <DialogAddTeam />
        </div>
        <div className="grid grid-cols-3 gap-5 mt-6 ">
          {[0, 1, 2].map((item: number) => (
            <div className="p-3 shadow text-center" key={item}>
              <div className="w-14 h-14 border rounded-full bg-gray-300 mx-auto" />
              <div className="mt-4 font-semibold ">
                Mochammad Fauzan Fadilah
              </div>
              <div className="text-sm text-gray-500">CEO</div>
              <div className="inline-flex mt-5 mx-auto gap-3 text-gray-500">
                <InstagramIcon className="w-4 h-4" />
                <LinkedinIcon className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
};

export default TeamForms;
