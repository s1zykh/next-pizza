import React from "react";
import { cn } from "@/shared/lib/cn";
import { FilterCheckbox } from "@/shared/ui/FilterCheckbox";
import { Title } from "@/shared/ui/Title";
import { FilterChecboxProps } from "@/shared/ui/FilterCheckbox";
import { Input } from "@/shared/ui/shadcnUI";

interface PizzaFiltersCheckboxProps {
  className?: string;
  title?: string;
  items: FilterChecboxProps[];
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  limit: number;
}

const PizzaFilterCheckboxItems = (items: FilterChecboxProps[]) => {
  return items.map(({ value, text }, key) => (
    <FilterCheckbox text={text} value={value} key={`${key}-${text}-${value}`} />
  ));
};

export const PizzaFilterCheckbox: React.FC<PizzaFiltersCheckboxProps> = (
  props
) => {
  const {
    className,
    items,
    title = null,
    searchInputPlaceholder,
    limit = 5,
  } = props;

  return (
    <div className={className}>
      {title && (
        <Title text={`${title}:`} size="xs" className="font-bold mb-3" />
      )}
      {searchInputPlaceholder && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {PizzaFilterCheckboxItems(items)}
      </div>
    </div>
  );
};
