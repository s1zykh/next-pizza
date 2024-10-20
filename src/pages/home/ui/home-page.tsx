import { Container } from "@/shared/ui/container";
import { Title } from "@/shared/ui/title";
import { Filters } from "@/widgets/filters";
import { TopBar } from "@/widgets/top-bar";
import { ProducstList } from "@/widgets/product-list";

export const HomePage = () => {
   return (
      <>
         <Container className="mt-10">
            <Title text="Товары" size="lg" className="font-extrabold" />
         </Container>
         <TopBar />
         <Container className="pb-14 mt-10">
            <div className="flex gap-[68px]">
               <div className="w-[250px]">
                  <Filters />
               </div>
               <div className="flex-1">
                  <ProducstList />
               </div>
            </div>
         </Container>
      </>
   );
};
