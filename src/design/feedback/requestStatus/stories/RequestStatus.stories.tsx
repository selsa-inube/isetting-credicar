import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { IRequestStatus, RequestStatus } from "..";

const meta: Meta<typeof RequestStatus> = {
  title: "modals/RequestStatusModal",
  component: RequestStatus,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IRequestStatus> = (args) => {
  return (
    <>
      <RequestStatus {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Estado de la solicitud",
  description:
    "Hemos recibido tu solicitud, el tramite se procesar, con el número de solicitud 123245.  Ten encuenta que este proceso va hacer gestionado por responsable, puede tardar un tiempo mientras se gestiona la aprobación.",
  actionText: "Enterado",
};

export default meta;
