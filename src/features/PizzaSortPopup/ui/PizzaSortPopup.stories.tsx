import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { PizzaSortPopup } from "./PizzaSortPopup";

const meta: Meta<typeof PizzaSortPopup> = {
  title: "features/PizzaSortPopup",
  component: PizzaSortPopup,
};

export default meta;

type Story = StoryObj<typeof PizzaSortPopup>;

export const Normal: Story = {
  args: {},
};
