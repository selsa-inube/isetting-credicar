import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@inubekit/inubekit";

import {
  DetailsRequestsInProgressModal,
  IDetailsRequestsInProgressModal,
} from "..";

const meta: Meta<typeof DetailsRequestsInProgressModal> = {
  title: "modals/DetailsRequestsInProgressModal",
  component: DetailsRequestsInProgressModal,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const labelsOfRequest = [
  {
    id: "date",
    titleName: "Fecha de solicitud:",
  },
  {
    id: "responsible",
    titleName: "Responsable:",
  },
  {
    id: "state",
    titleName: "Estado:",
  },
];

const labelsOfTraceability = [
  {
    id: "observation",
    titleName: "Observación:",
  },
];

const data = {
  id: "1",
  request: "destino de vacaciones",
  date: "19/Oct/2024",
  responsible: "Marcela María González Suarez",
  state: "Procesada",
  observation: "Solicitud procesada con éxito.",
};

const Template: StoryFn<IDetailsRequestsInProgressModal> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <DetailsRequestsInProgressModal
          {...args}
          onCloseModal={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  data: data,
  labelsOfRequest,
  labelsOfTraceability,
  dateSelected: "19/Oct/2024",
  dateOptions: [],
};

export default meta;
