import type { Meta, StoryObj } from "@storybook/react";
import { OptionList } from "..";
import { OptionItem } from "../../optionItem";

type Story = StoryObj<typeof OptionList>;

const options = [
  { id: "1", label: "Item 1", checked: false },
  { id: "2", label: "Item 2", checked: true },
  { id: "3", label: "Item 3", checked: false },
];

const meta: Meta<typeof OptionList> = {
  title: "inputs/SelectCheck/OptionList",
  component: OptionList,
};

const Default: Story = {
  args: {
    children: options.map((optionItem) => (
      <OptionItem
        key={optionItem.id}
        id={optionItem.id}
        label={optionItem.label}
        checked={optionItem.checked}
      />
    )),
  },
};

export { Default };
export default meta;
