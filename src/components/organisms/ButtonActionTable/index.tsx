"use client";

import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  url: string;
};

const ButtonActionTable = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <Button
        size="icon"
        variant="outline"
        onClick={() => router.push(props.url)}
      >
        <MoreVertical className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ButtonActionTable;
