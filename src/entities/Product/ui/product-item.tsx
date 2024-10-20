import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";

import { Title } from "@/shared/ui/title";
import { Button } from "@/shared/ui/shadcnUI";

export interface ProductListItemProps {
   id: number;
   name: string;
   price: number;
   imageUrl: string;
   className?: string;
}

export const ProductListItem = (props: ProductListItemProps) => {
   const { id, name, price, imageUrl, className } = props;
   return (
      <div className={className}>
         <Link href={`/product/${id}`}>
            <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
               <Image alt={name} src={imageUrl} width={215} height={215} />
            </div>
            <Title text={name} size="sm" className="mb-1 mt-2 font-bold" />
            <p className="text-sm text-gray-400">Цыпленок</p>

            <div className="flex justify-between items-center mt-4">
               <span className="text-[20px]">
                  от <b>{price} ₽</b>
               </span>

               <Button variant={"secondary"} className="text-base font-bold">
                  <Plus size={20} className="mr-1" />
                  Добавить
               </Button>
            </div>
         </Link>
      </div>
   );
};
