import { Ingredient } from "@prisma/client";

import { $api } from "@/shared/api/axios";
import { ApiRoutes } from "@/shared/types/routes";

export const getAll = async (): Promise<Ingredient[]> => {
   const { data } = await $api.get<Ingredient[]>(ApiRoutes.INGREDIENTS);

   return data;
};
