import React from "react";

import { cn } from "@/shared/lib/cn";

interface PizzaCategoriesTabsProps {
   className?: string;
}
const cast = [
   "Пиццы",
   "Комбо",
   "Закуски",
   "Коктейли",
   "Кофе",
   "Напитки",
   "Десерты",
];
const activeIndex = 0;

export const PizzaCategoriesTabs = (props: PizzaCategoriesTabsProps) => {
   const { className } = props;
   return (
      <div
         className={cn(
            "inline-flex gap-1 bg-gray-50 p-1 rounded-2xl",
            className,
         )}
      >
         {cast.map((name, i) => (
            <a
               key={name}
               className={cn(
                  "flex items-center font-bold h-11 rounded-2xl px-5",
                  activeIndex === i &&
                     "bg-white shadow-md shadow-gray-200 text-primary",
               )}
               href=""
            >
               {name}
            </a>
         ))}
      </div>
   );
};
