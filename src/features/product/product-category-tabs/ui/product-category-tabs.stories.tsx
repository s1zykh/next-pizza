import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { PizzaCategoriesTabs } from "./product-category-tabs";

const meta: Meta<typeof PizzaCategoriesTabs> = {
   title: "features/PizzaCategoriesTabs",
   component: PizzaCategoriesTabs,
};

export default meta;

type Story = StoryObj<typeof PizzaCategoriesTabs>;

export const Normal: Story = {
   args: {},
};
