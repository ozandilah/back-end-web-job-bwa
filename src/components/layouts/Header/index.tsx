"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const navCreateJobPages = () => router.push("/post-a-job");
  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
      <div className="">
        <div>Company</div>
        <div className="font-semibold">Twitter</div>
      </div>
      <div>
        <Button onClick={navCreateJobPages} className="rounded-none py-3 px-6">
          <PlusIcon className="mr-4 w-4 h-4" />
          Post a Job
        </Button>
      </div>
    </div>
  );
};

export default Header;
