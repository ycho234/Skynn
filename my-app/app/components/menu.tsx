"use client";
import SliderFilter from "../components/SliderFilter";
import Checkbox from "../components/Checkbox";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Menu() {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.00"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-menu text-[#626663] sm:hidden "
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filter</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
            <h1>Skin Type</h1>
            <SliderFilter defaultValue={[1]} max={5} step={1} />
            <h1>Ingredients</h1>
            <Checkbox labelText="rice" />
            <Checkbox labelText="hyalouronic acid" />
            <h1>Product Type</h1>
            <Checkbox labelText="lotion" />
            <Checkbox labelText="suncream" />
            <Checkbox labelText="serum" />
            <Checkbox labelText="toner" />
            <Checkbox labelText="pimple patch" />
            <h1>Price Range</h1>
            <SliderFilter />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
