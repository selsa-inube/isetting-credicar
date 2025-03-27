import { BrowserRouter } from "react-router-dom";
import { Stack } from "@inubekit/inubekit";
import { Meta, StoryFn } from "@storybook/react";
import { IPaymentCycleCardGroup, PaymentCycleCardGroup } from "..";

const meta: Meta<typeof PaymentCycleCardGroup> = {
  title: "feedback/paymentCycleCardGroup",
  component: PaymentCycleCardGroup,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const labelsPaymentCard = [
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

const data = [
  {
    id: "1",
    name: "Nómina regular",
    periodicity: "Quincenal",
    dayPayment: "15, 30",
    numberDays: "8",
  },
  {
    id: "2",
    name: "Nómina mensual para independientes",
    periodicity: "Mensual",
    dayPayment: "30",
    numberDays: "10",
  },
  {
    id: "3",
    name: "Nómina regular",
    periodicity: "Quincenal",
    dayPayment: "15, 30",
    numberDays: "8",
  },
];

const Template: StoryFn<IPaymentCycleCardGroup> = (args) => {
  return (
    <>
      <Stack width="620px" height="300px">
        <PaymentCycleCardGroup {...args} />
      </Stack>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  data: data,
  labelsPaymentCard,
};

export default meta;
