import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@inubekit/button";

import { DecisionModal, DecisionModalProps } from "..";

const meta: Meta<typeof DecisionModal> = {
  title: "modals/DecisionModal",
  component: DecisionModal,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<DecisionModalProps> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <DecisionModal {...args} onCloseModal={() => setShowModal(false)} />
      )}
    </>
  );
};

export const DeleteProcess = Template.bind({});
DeleteProcess.args = {
  portalId: "portal",
  title: "Eliminar",
  description: "¿Realmente deseas eliminar este destino de dinero?",
  actionText: "Eliminar",
  justificationOfDecision: true,
};

export const EditProcess = Template.bind({});
EditProcess.args = {
  portalId: "portal",
  title: "Editar",
  description: "¿Realmente deseas editar este destino de dinero?",
  actionText: "Continuar",
};

export default meta;
