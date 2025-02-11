import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";

import { ComponentAppearance } from "@enum/appearances";
import { IRequestProcess, RequestProcess } from "..";

const meta: Meta<typeof RequestProcess> = {
  title: "feedback/RequestProcess",
  component: RequestProcess,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IRequestProcess> = (args) => {
  return (
    <>
      <RequestProcess {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  appearance: ComponentAppearance.SUCCESS,
  title: "Procesando solicitud",
  description:
    "Hemos recibido tu solicitud y se encuentra en proceso. Por favor, espera mientras la gestionamos.",
  requestSteps: [
    { name: "Solicitud radicada", status: "completed" },
    { name: "Agregando", status: "completed" },
    { name: "Destino agregado", status: "pending" },
  ],
};

export const WithError = Template.bind({});
WithError.args = {
  appearance: ComponentAppearance.DANGER,
  title: "Procesando solicitud",
  description:
    "Hemos recibido tu solicitud y se encuentra en proceso. Por favor, espera mientras la gestionamos.",
  requestSteps: [
    { name: "Solicitud radicada", status: "completed" },
    { name: "Evaluando requisitos", status: "completed" },
    { name: "Agregando", status: "error" },
    { name: "Destino agregado", status: "pending" },
  ],
};

export default meta;
