import type { Meta, StoryObj } from "@storybook/react";
import { OptionItem } from "..";

type Story = StoryObj<typeof OptionItem>;

const meta: Meta<typeof OptionItem> = {
  title: "inputs/SelectCheck/OptionItem",
  component: OptionItem,
};

const Default: Story = {
  args: {
    id: "1",
    label: "Item 1",
  },
};

export { Default };
export default meta;
