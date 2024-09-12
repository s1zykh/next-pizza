import React from "react";

import { cn } from "@/shared/lib/cn";
import { ArrowUpDown } from "lucide-react";

interface PizzaSortTabsProps {
  className?: string;
}

export const PizzaSortPopup = (props: PizzaSortTabsProps) => {
  const { className } = props;
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className
      )}
    >
      <ArrowUpDown size={16} />
      <b>Сортировка</b>
      <b className="text-primary">Популярное</b>
    </div>
  );
};
