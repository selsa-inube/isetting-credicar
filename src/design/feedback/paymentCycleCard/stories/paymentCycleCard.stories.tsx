import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { IPaymentCycleCard, PaymentCycleCard } from "..";

const meta: Meta<typeof PaymentCycleCard> = {
  title: "feedback/PaymentCycleCard",
  component: PaymentCycleCard,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const labels = [
  {
    id: "name",
    titleName: "Nombre",
  },
  {
    id: "periodicity",
    titleName: "Periodicidad",
  },
  {
    id: "dayPayment",
    titleName: "Día de pago",
  },
  {
    id: "numberDays",
    titleName: "No. de días para el corte",
  },
];

const data = {
  id: "1",
  name: "Nómina regular",
  periodicity: "Quincenal",
  dayPayment: "15, 30",
  numberDays: "8",
};

const Template: StoryFn<IPaymentCycleCard> = (args) => {
  return (
    <>
      <PaymentCycleCard {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  numberCard: 1,
  data: data,
  labels,
};

export default meta;
