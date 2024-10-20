"use client";

import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { useClickAway } from "react-use";
import Link from "next/link";

import { cn } from "@/shared/lib/cn";

interface SearchInputProps {
   className?: string;
}

export const SearchInput = (props: SearchInputProps) => {
   const { className } = props;

   const [focused, setFocused] = useState<boolean>(false);

   const ref = useRef(null);

   useClickAway(ref, () => {
      setFocused(false);
   });

   return (
      <>
         {focused && (
            <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>
         )}
         <div
            className={cn(
               "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
            )}
            ref={ref}
         >
            <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
            <input
               type="text"
               className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
               placeholder="Найти продукт..."
               onFocus={() => setFocused(true)}
            />

            <div
               className={cn(
                  "absolute w-full bg-white rounded-xl py-2 top-14 shodow-md transition-all duration-200 invisible opacity-0 z-30",
                  focused && "visible opacity-100 top-12",
               )}
            >
               <Link href={"/search"}>
                  <div className="px-3 py-2 hover:bg-primary/10"></div>
               </Link>
            </div>
         </div>
      </>
   );
};
