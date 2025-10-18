"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SearchIcon, SendHorizontal } from "lucide-react";
import { useId } from "react";

// ✅ Default export use karein, named function nahi
export default function Searching() {
  const id = useId();

  return (
    <div className="flex justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="inline-flex items-center justify-center mt-0.5
                      w-8 h-8
                      bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500
                      text-black 
                      shadow-sm hover:shadow-amber-400/40
                      transition-all duration-300
                      hover:text-white hover:from-yellow-400 hover:to-orange-600
                      focus:outline-none active:scale-95"
          >
            <SearchIcon size={16} />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="top"
          className="w-full sm:w-[540px] md:w-[600px] lg:w-[700px]
                     mx-auto rounded-xl shadow-2xl border border-indigo-300
                     flex flex-col items-center justify-center
                     bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900
                     text-white"
        >
          <SheetHeader className="text-center space-y-2">
            <SheetTitle className="text-2xl font-bold text-amber-300">
              Are you absolutely sure?
            </SheetTitle>

            <SheetDescription asChild className="max-w-md mx-auto">
              <div className="*:not-first:mt-2 text-sm text-white leading-relaxed">
                <label htmlFor={id} className="block mb-1">
                  Search Projects
                </label>

                <div className="relative">
                  <input
                    id={id}
                    type="search"
                    placeholder="Search..."
                    className="peer ps-9 pe-9 w-full bg-white text-black text-lg font-sans font-medium rounded-md"
                  />
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <SearchIcon size={17} />
                  </div>
                  <button
                    type="submit"
                    aria-label="Submit search"
                    className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 transition-all hover:text-foreground focus:z-10 focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <SendHorizontal size={16} />
                  </button>
                </div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}