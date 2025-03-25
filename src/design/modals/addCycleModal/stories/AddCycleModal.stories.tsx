import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

import { AddCycleModal } from "..";
import { ControllerAddCycle } from "./AddCycle.controller";

type Story = StoryObj<typeof AddCycleModal>;

const meta: Meta<typeof AddCycleModal> = {
  title: "modals/AddCycleModal",
  component: ControllerAddCycle,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default: Story = {
  args: {
    portalId: "portal",
    title: "Agregar ciclo de pago",
    actionText: "Agregar",
    isOrdinary: true,
  },
};

const Extraordinary: Story = {
  args: {
    portalId: "portal",
    title: "Agregar ciclo de pago",
    actionText: "Agregar",
    isExtraordinary: true,
  },
};

export { Default, Extraordinary };
export default meta;
