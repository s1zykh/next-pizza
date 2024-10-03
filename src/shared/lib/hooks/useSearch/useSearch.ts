import { useState, useMemo } from "react";

import { FilterChecboxProps } from "@/shared/types";
function useSearch(items: FilterChecboxProps[]) {
   const [query, setQuery] = useState<string>("");

   const filteredItems = useMemo(() => {
      if (!query) return items;

      return items.filter((item) =>
         item.value.toString().toLowerCase().includes(query.toLowerCase()),
      );
   }, [items, query]);

   return { query, setQuery, filteredItems };
}
export default useSearch;
