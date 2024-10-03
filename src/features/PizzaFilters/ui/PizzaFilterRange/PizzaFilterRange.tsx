import React from "react";

import { Input } from "@/shared/ui/shadcnUI";

interface PizzaFilterPriceRangeProps {
   className?: string;
}

export const PizzaFilterRange = (props: PizzaFilterPriceRangeProps) => {
   const { className } = props;
   return (
      <div className={"border-y border-y-neutral-100 py-6 pb-7"}>
         <p className="font-bold mb-3">Цена от и до</p>
         <div className="flex gap-3 mb-5">
            <Input
               type="number"
               placeholder="0"
               min={0}
               max={1000}
               defaultValue={0}
            />
            <Input type="number" placeholder="100" min={100} max={1000} />
         </div>
      </div>
   );
};
