import React from "react";

import { Container } from "@/shared/ui/container";
import { PizzaCategoriesTabs } from "@/features/product/product-category-tabs";
import { PizzaSortPopup } from "@/features/product/product-sort";
import { cn } from "@/shared/lib/cn";

interface TopBarProps {
   className?: string;
}

export const TopBar = (props: TopBarProps) => {
   const { className } = props;
   return (
      <div
         className={cn(
            "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
            className,
         )}
      >
         <Container className="flex items-center justify-between">
            <PizzaCategoriesTabs />
            <PizzaSortPopup />
         </Container>
      </div>
   );
};
