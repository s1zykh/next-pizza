import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: "shared/Title",
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const TextXsSize: Story = {
  args: {
    size: "xs",
    text: "Hello World!!!",
  },
};

export const TextMdSize: Story = {
  args: {
    size: "md",
    text: "Hello World!!!",
  },
};
export const TextLgSize: Story = {
  args: {
    size: "lg",
    text: "Hello World!!!",
  },
};
export const TextXlSize: Story = {
  args: {
    size: "xl",
    text: "Hello World!!!",
  },
};
export const Text2XlSize: Story = {
  args: {
    size: "2xl",
    text: "Hello World!!!",
  },
};
