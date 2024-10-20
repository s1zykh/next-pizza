import { Product } from "@prisma/client";

import { $api } from "@/shared/api/axios";
import { ApiRoutes } from "@/shared/types/routes";

export const productSearch = async (query: string): Promise<Product[]> => {
   const { data } = await $api.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      params: { query },
   });

   return data;
};
