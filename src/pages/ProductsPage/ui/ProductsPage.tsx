"use client";
import { Container } from "@/shared/ui/Container";
import { Title } from "@/shared/ui/Title";
import { Filters } from "@/widgets/Filters";
import { TopBar } from "@/widgets/TopBar";
import { ProductList } from "@/entities/Product";
import { useCategoryStore } from "../model/useCategoryStore";

export const ProductsPage = () => {
   const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
   const categoryActiveId = useCategoryStore((state) => state.activeId);

   return (
      <>
         <Container className="mt-10">
            <Title text="Товары" size="lg" className="font-extrabold"></Title>
         </Container>
         <TopBar categoryActiveId={categoryActiveId} />
         <Container className="pb-14 mt-10">
            <div className="flex gap-[68px]">
               <div className="w-[250px]">
                  <Filters />
               </div>
               <div className="flex-1">
                  <div className="flex flex-col gap-16">
                     <ProductList
                        title="Пиццы"
                        items={[
                           {
                              name: "Сырная",
                              price: 500,
                              id: 1,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                           },
                           {
                              name: "Пепперони фреш",
                              price: 500,
                              id: 2,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                           },
                           {
                              name: "Двойной цыпленок",
                              price: 500,
                              id: 3,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                           },
                           {
                              name: "Ветчина и сыр",
                              price: 500,
                              id: 4,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif",
                           },
                           {
                              name: "Чоризо фреш",
                              price: 500,
                              id: 5,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                           },
                           {
                              name: "Жюльен",
                              price: 500,
                              id: 6,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                           },
                           {
                              name: "Додо микс",
                              price: 500,
                              id: 7,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                           },
                           {
                              name: "Песто",
                              price: 500,
                              id: 8,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif",
                           },
                           {
                              name: "Карбонара",
                              price: 500,
                              id: 9,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                           },
                        ]}
                        categoryId={1}
                        setActiveCategoryId={setActiveCategoryId}
                     />
                     <ProductList
                        title="Комбо"
                        items={[
                           {
                              name: "Сырная",
                              price: 500,
                              id: 1,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif",
                           },
                           {
                              name: "Пепперони фреш",
                              price: 500,
                              id: 2,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                           },
                           {
                              name: "Двойной цыпленок",
                              price: 500,
                              id: 3,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D614CBE0530B7234B6D7A6E5F8E.avif",
                           },
                           {
                              name: "Ветчина и сыр",
                              price: 500,
                              id: 4,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif",
                           },
                           {
                              name: "Чоризо фреш",
                              price: 500,
                              id: 5,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                           },
                           {
                              name: "Жюльен",
                              price: 500,
                              id: 6,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                           },
                           {
                              name: "Додо микс",
                              price: 500,
                              id: 7,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                           },
                           {
                              name: "Песто",
                              price: 500,
                              id: 8,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D613B84A5DBB4C1C50FB9583B7E.avif",
                           },
                           {
                              name: "Карбонара",
                              price: 500,
                              id: 9,
                              imageUrl:
                                 "https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.avif",
                           },
                        ]}
                        categoryId={2}
                        setActiveCategoryId={setActiveCategoryId}
                     />
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
};
