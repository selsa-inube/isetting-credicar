import { useState } from "react";
import { MdOutlineBeachAccess } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@inubekit/button";

import { IconWithText } from "@components/data/IconWithText";
import { DetailsDestinationModal, IDetailsDestinationModal } from "..";

const meta: Meta<typeof DetailsDestinationModal> = {
  title: "modals/DetailsDestinationModal",
  component: DetailsDestinationModal,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const detailsTabsConfig = {
  generalData: {
    id: "generalData",
    isDisabled: false,
    label: "Datos generales",
  },
  creditLine: {
    id: "creditLine",
    isDisabled: false,
    label: "Línea de crédito",
    notificationIndicators: 2,
  },
};

const data = {
  id: "1",
  name: (
    <IconWithText icon={<MdOutlineBeachAccess size={16} />} text="Vacaciones" />
  ),
  description:
    "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
};

const Template: StoryFn<IDetailsDestinationModal> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      {showModal && (
        <DetailsDestinationModal
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
  detailsTabsConfig: detailsTabsConfig,
  data: data,
};

export default meta;
