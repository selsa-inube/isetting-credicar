import { BrowserRouter } from "react-router-dom";
import { StoryFn, Meta } from "@storybook/react";

import { CreditLineCard, ICreditLineCard } from "..";
import {
  IRuleDecision,
  ValueDataType,
  ValueHowToSetUp,
} from "@isettingkit/input";

const meta: Meta<typeof CreditLineCard> = {
  component: CreditLineCard,
  title: "feedback/CreditLineCard",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const decision1: IRuleDecision = {
  id: "Decisión 1",
  name: "LíneaDeCrédito",
  dataType: ValueDataType.ALPHABETICAL,
  value: "Crédito vacacional",
  valueUse: ValueHowToSetUp.EQUAL,
  startDate: "2024-12-31",
  endDate: "2024-12-31",
  conditions: [
    {
      name: "CategoriaCliente",
      dataType: ValueDataType.ALPHABETICAL,
      value: ["Leales", "Platinum"],
      valueUse: ValueHowToSetUp.LIST_OF_VALUES_MULTI,
    },
  ],
};

const Template: StoryFn<ICreditLineCard> = (args) => (
  <CreditLineCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: decision1,
};

export default meta;
