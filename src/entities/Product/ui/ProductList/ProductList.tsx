"use client";

import React, { useEffect, useRef } from "react";
import { useIntersection } from "react-use";

import { useCategoryStore } from "@/pages/ProductsPage/model/useCategoryStore";
import { cn } from "@/shared/lib/cn";
import { Title } from "@/shared/ui/Title";
import { ProductListItem } from "../ProductListItem/ProductListItem";
import { ProductListItemProps } from "../ProductListItem/ProductListItem";

interface ProductListProps {
   className?: string;
   title: string;
   items: ProductListItemProps[];
   categoryId: number;
   listClassName?: string;
   setActiveCategoryId: (activeId: number) => void;
}

export const ProductList = (props: ProductListProps) => {
   const {
      className,
      title,
      items,
      categoryId,
      listClassName,
      setActiveCategoryId,
   } = props;

   const intersectionRef = useRef(null);
   const intersection = useIntersection(intersectionRef, {
      threshold: 0.6,
   });

   useEffect(() => {
      if (intersection?.isIntersecting) {
         setActiveCategoryId(categoryId);
      }
   }),
      [intersection?.isIntersecting, categoryId];

   return (
      <div className={className} id={title} ref={intersectionRef}>
         <Title text={title} size="lg" className="font-extrabold mb-5" />

         <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
            {items.map((product, i) => (
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
