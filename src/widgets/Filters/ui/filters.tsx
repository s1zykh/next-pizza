"use client";

import {
   PizzaFilterRange,
   PizzaFilterCheckbox,
} from "@/features/product/product-filter";
import { cn } from "@/shared/lib/cn";
import { Title } from "@/shared/ui/title";
import { useFilterIngredients } from "@/shared/lib/hooks/useFilterIngredients";

interface FiltersProps {
   className?: string;
}

export const Filters = (props: FiltersProps) => {
   const { className } = props;
   const { ingredients } = useFilterIngredients();
   const filteredIngredients = ingredients.map((item) => ({
      value: String(item.id),
      text: item.name,
   }));
   return (
      <div className={cn("flex flex-col gap-7", className)}>
         <Title text="Фильтрация" size="sm" className="font-bold" />
         <PizzaFilterCheckbox
            items={[
               { text: "Можно собирать", value: "1" },
               { text: "Новинки", value: "2" },
            ]}
            defaultValue={[
               { text: "Можно собирать", value: "1" },
               { text: "Новинки", value: "2" },
            ]}
         />
         <PizzaFilterRange />
         <PizzaFilterCheckbox
            items={filteredIngredients}
            defaultValue={filteredIngredients.slice(0, 6)}
            limit={6}
            title="Ингредиенты"
            searchInputPlaceholder="Поиск"
         />
      </div>
   );
};
