import { useState, useMemo } from "react";

import { FilterChecboxProps } from "@/shared/types";

export function useSearch(items: FilterChecboxProps[]) {
   const [textInput, setTextInput] = useState<string>("");

   const filteredItems = useMemo(() => {
      if (!textInput) return items;

      return items.filter((item) =>
         item.text
            .toString()
            .toLowerCase()
            .includes(textInput.toLocaleLowerCase()),
      );
   }, [items, textInput]);

   return { textInput, setTextInput, filteredItems };
}
