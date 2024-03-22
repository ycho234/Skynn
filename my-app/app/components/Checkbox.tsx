"use client";

"use client";

import { Checkbox } from "@/components/ui/checkbox";

type labelProps = {
  labelText: string;
};

export default function CheckboxDemo({ labelText }: { labelText: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {labelText}
      </label>
    </div>
  );
}
