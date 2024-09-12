import React from "react";
import { Container } from "@/shared/ui/Container";
import { PizzaCategoriesTabs } from "@/features/PizzaCategoriesTabs";
import { PizzaSortPopup } from "@/features/PizzaSortPopup";

interface TopBarProps {
  className?: string;
}

export const TopBar = (props: TopBarProps) => {
  return (
    <>
      <Container className="mt-10 ">
        <div className="flex items-center justify-between ">
          <PizzaCategoriesTabs />
          <PizzaSortPopup />
        </div>
      </Container>
    </>
  );
};
