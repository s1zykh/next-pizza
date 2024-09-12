import React from "react";
import { cn } from "@/shared/lib/cn";
import { FilterCheckbox } from "@/shared/ui/FilterCheckbox";

interface IPizzaFiltersCheckbox {
  text: string;
  value: string;
}

interface PizzaFiltersCheckboxProps {
  className?: string;
  items: IPizzaFiltersCheckbox[];
}

const PizzaFiltersCheckboxItems = (items: IPizzaFiltersCheckbox[]) => {
  return items.map(({ value, text }, key) => (
    <FilterCheckbox text={text} value={value} key={`${key}-${text}-${value}`} />
  ));
};

export const PizzaFiltersCheckbox: React.FC<PizzaFiltersCheckboxProps> = (
  props
) => {
  const { className, items } = props;

  return (
    <div className={className}>
      <div className="flex flex-col gap-4">
        {PizzaFiltersCheckboxItems(items)}
      </div>
    </div>
  );
};
