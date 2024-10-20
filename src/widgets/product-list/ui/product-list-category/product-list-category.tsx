"use client";

import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";

import { cn } from "@/shared/lib/cn";
import { Title } from "@/shared/ui/title";
import { ProductListItem, ProductListItemProps } from "@/entities/product";
import { useCategoryStore } from "@/entities/category";

interface ProductCategoryListProps {
   className?: string;
   title: string;
   items: ProductListItemProps[];
   categoryId: number;
   listClassName?: string;
}

export const ProductCategoryList = (props: ProductCategoryListProps) => {
   const { className, title, items, categoryId, listClassName } = props;

   const setActiveId = useCategoryStore((state) => state.setActiveId);
   const intersectionRef = useRef(null);
   const intersection = useIntersection(intersectionRef, {
      threshold: 0.6,
   });

   useEffect(() => {
      if (intersection?.isIntersecting) {
         setActiveId(categoryId);
      }
   }),
      [title];

   return (
      <div className={className} id={title} ref={intersectionRef}>
         <Title text={title} size="lg" className="font-extrabold mb-5" />

         <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
            {items.map((product) => (
               <ProductListItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  price={product.price}
               />
            ))}
         </div>
      </div>
   );
};
