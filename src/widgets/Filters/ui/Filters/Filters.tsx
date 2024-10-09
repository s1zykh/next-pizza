import { PizzaFilterRange, PizzaFilterCheckbox } from "@/features/PizzaFilters";
import { cn } from "@/shared/lib/cn";
import { Title } from "@/shared/ui/Title";

interface FiltersProps {
   className?: string;
}

export const Filters = (props: FiltersProps) => {
   const { className } = props;

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
            items={[
               { text: "Сырный соус", value: "1" },
               { text: "Моцарелла", value: "2" },
               { text: "Чеснок", value: "1" },
               { text: "Солённые огурчики", value: "2" },
               { text: "Красный лук", value: "1" },
               { text: "Томаты", value: "2" },
               { text: "Сырный соус", value: "1" },
               { text: "Моцарелла", value: "2" },
               { text: "Чеснок", value: "1" },
               { text: "Солённые огурчики", value: "2" },
               { text: "Красный лук", value: "1" },
               { text: "Томаты", value: "2" },
               { text: "Сырный соус", value: "1" },
               { text: "Моцарелла", value: "2" },
               { text: "Чеснок", value: "1" },
               { text: "Солённые огурчики", value: "2" },
               { text: "Красный лук", value: "1" },
               { text: "Томаты", value: "2" },
               { text: "Сырный соус", value: "1" },
               { text: "Моцарелла", value: "2" },
               { text: "Чеснок", value: "1" },
               { text: "Солённые огурчики", value: "2" },
               { text: "Красный лук", value: "1" },
               { text: "Томаты", value: "2" },
            ]}
            defaultValue={[
               { text: "Сырный соус", value: "1" },
               { text: "Моцарелла", value: "2" },
               { text: "Чеснок", value: "1" },
               { text: "Солённые огурчики", value: "2" },
               { text: "Красный лук", value: "1" },
               { text: "Томаты", value: "2" },
            ]}
            limit={6}
            title="Ингредиенты"
            searchInputPlaceholder="Поиск"
         />
      </div>
   );
};
