import { PizzaFiltersCheckbox } from "@/features/PizzaFilters";
import { cn } from "@/shared/lib/cn";
import { Title } from "@/shared/ui/Title";

interface FiltersProps {
  className?: string;
}

export const Filters = (props: FiltersProps) => {
  const { className } = props;

  return (
    <div className={cn(className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <PizzaFiltersCheckbox
        items={[
          { text: "Можно собирать", value: "1" },
          { text: "Новинки", value: "2" },
        ]}
      />
    </div>
  );
};
