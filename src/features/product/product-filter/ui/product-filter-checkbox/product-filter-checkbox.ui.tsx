"use client";

import React, { useState } from "react";

import { FilterCheckbox } from "@/shared/ui/checkbox-filter";
import { Title } from "@/shared/ui/title";
import { Input } from "@/shared/ui/shadcnUI";
import { useSearch } from "@/shared/lib/hooks/useSearch";
import { FilterChecboxProps } from "@/shared/types";

interface PizzaFiltersCheckboxProps {
   className?: string;
   title?: string;
   items: FilterChecboxProps[];
   searchInputPlaceholder?: string;
   onChange?: (values: string[]) => void;
   defaultValue: FilterChecboxProps[];
   limit?: number;
}

const PizzaFilterCheckboxItems = (items: FilterChecboxProps[]) => {
   return items.map((item) => (
      <FilterCheckbox
         text={item.text}
         value={item.value}
         key={`${item.name}-${item.value}`}
         endAdornment={item.endAdornment}
         checked={false}
         onCheckedChange={() => console.log("1")}
      />
   ));
};

export const PizzaFilterCheckbox: React.FC<PizzaFiltersCheckboxProps> = (
   props,
) => {
   const {
      className,
      items,
      defaultValue,
      title = null,
      searchInputPlaceholder,
      limit = 6,
   } = props;

   const [showAll, setShowAll] = useState<boolean>(false);

   const { setTextInput, filteredItems } = useSearch(items);

   const list = showAll ? filteredItems : defaultValue?.slice(0, limit);

   return (
      <div className={className}>
         {title && (
            <Title text={`${title}:`} size="xs" className="font-bold mb-3" />
         )}
         {searchInputPlaceholder && showAll && (
            <div className="mb-5">
               <Input
                  placeholder={searchInputPlaceholder}
                  className="bg-gray-50 border-none"
                  onChange={(e) => setTextInput(e.target.value)}
               />
            </div>
         )}
         <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
            {PizzaFilterCheckboxItems(list)}
         </div>
         {items.length > limit && (
            <div
               className={showAll ? "border-t botder-t-neutral-100 mt-4" : ""}
            >
               <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-primary mt-3"
               >
                  {showAll ? "Скрыть" : "+ Показать все"}
               </button>
            </div>
         )}
      </div>
   );
};
