"use client";

import React from "react";

import { cn } from "@/shared/lib/cn";
import { useCategoryStore } from "@/entities/category";

interface PizzaCategoriesTabsProps {
   className?: string;
}
const cast = [
   { id: 1, name: "Пиццы" },
   { id: 2, name: "Комбо" },
   { id: 3, name: "Закуски" },
   { id: 4, name: "Коктейли" },
   { id: 5, name: "Кофе" },
   { id: 6, name: "Напитки" },
   { id: 7, name: "Десерты" },
];

export const PizzaCategoriesTabs = (props: PizzaCategoriesTabsProps) => {
   const { className } = props;

   const categoryActiveId = useCategoryStore((state) => state.activeId);

   return (
      <div
         className={cn(
            "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
            className,
         )}
      >
         {cast.map(({ name, id }, i) => (
            <a
               key={name}
               className={cn(
                  "flex items-center font-bold h-11 rounded-2xl px-5",
                  categoryActiveId === id &&
                     "bg-white shadow-md shadow-gray-200 text-primary",
               )}
               href={`/#${name}`}
            >
               {name}
            </a>
         ))}
      </div>
   );
};
