import React from "react";
import { cn } from "@/shared/lib/cn";
import { Container } from "@/shared/ui/Container";
import { Title } from "@/shared/ui/Title";
import { PizzaCategoriesTabs } from "@/features/PizzaCategoriesTabs";
import { PizzaSortPopup } from "@/features/PizzaSortPopup";

interface TopBarProps {
  className?: string;
}

export const TopBar = (props: TopBarProps) => {
  const { className } = props;
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"></Title>
        <div className="flex items-center justify-between">
          <PizzaCategoriesTabs />
          <PizzaSortPopup />
        </div>
      </Container>
    </>
  );
};
