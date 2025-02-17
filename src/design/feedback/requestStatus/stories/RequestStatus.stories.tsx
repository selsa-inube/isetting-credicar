import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { IRequestStatus, RequestStatus } from "..";

const meta: Meta<typeof RequestStatus> = {
  title: "feedback/RequestStatus",
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
  title: "Solicitud",
  requestNumber: "123245",
  description:
    "Este proceso será gestionado por Jose Perez, puede tardar algún tiempo mientras se gestiona la aprobación.",
  actionText: "Enterado",
};

export default meta;
