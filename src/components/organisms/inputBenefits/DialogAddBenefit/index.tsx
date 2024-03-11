import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogTitle } from "@radix-ui/react-dialog";
import { PlusIcon } from "lucide-react";
import React, { useRef } from "react";

type Props = {
  updateBenefit: (item: any) => void;
};

const DialogAddBenefits = (props: Props) => {
  const benefitRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const handleSaveBenefit = () => {
    const benefit = benefitRef.current?.value;
    const description = descriptionRef.current?.value;

    if (benefit === "" || description === "") {
      return;
    }
    props.updateBenefit({
      benefit,
      description,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="outline">
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Benefit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Benefit</DialogTitle>
          <DialogDescription>
            Make a new benefit, click save when your done
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-8 mb-5">
          <div>
            <label htmlFor="benefit">Benefit</label>
            <Input
              id="benefit"
              placeholder="fill your benefit..."
              ref={benefitRef}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Textarea
              id="description"
              placeholder="fill your description..."
              ref={descriptionRef}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSaveBenefit}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddBenefits;
