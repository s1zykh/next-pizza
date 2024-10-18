"use client";
import { Container } from "@/shared/ui/Container";
import { Title } from "@/shared/ui/Title";
import { Filters } from "@/widgets/Filters";
import { TopBar } from "@/widgets/TopBar";
import { ProducstList } from "@/widgets/ProductList";
import { useCategoryStore } from "@/entities/Category";

export const ProductsPage = () => {
   const { setActiveId, activeId } = useCategoryStore((state) => state);

   return (
      <>
         <Container className="mt-10">
            <Title text="Товары" size="lg" className="font-extrabold"></Title>
         </Container>
         <TopBar categoryActiveId={activeId} />
         <Container className="pb-14 mt-10">
            <div className="flex gap-[68px]">
               <div className="w-[250px]">
                  <Filters />
               </div>
               <div className="flex-1">
                  <ProducstList setActiveId={setActiveId} />
               </div>
            </div>
         </Container>
      </>
   );
};
