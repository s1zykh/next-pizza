import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

import { Api } from "@/shared/api/axios/api-client";

interface ReturnProps {
   ingredients: Ingredient[];
}

export const useFilterIngredients = (): ReturnProps => {
   const [ingredients, setItems] = useState<Ingredient[]>([]);

   useEffect(() => {
      async function fetchIngredients() {
         try {
            const ingredients = await Api.ingredients.getAll();
            setItems(ingredients);
         } catch (error) {
            console.log(error);
         }
      }
      fetchIngredients();
   }, []);

   return {
      ingredients,
   };
};
