import React from "react";

import { ProductCategoryList } from "../product-list-category/product-list-category";

interface ProductListProps {
   className?: string;
}

export const ProducstList = (props: ProductListProps) => {
   const { className } = props;

   return (
      <div className="flex flex-col gap-16">
         <ProductCategoryList
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
         />
         <ProductCategoryList
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
         />
      </div>
   );
};
