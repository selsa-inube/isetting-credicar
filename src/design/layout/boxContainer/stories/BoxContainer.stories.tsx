import { inube } from "@inubekit/inubekit";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";

import { BoxContainer, IBoxContainer } from "..";

const meta: Meta<typeof BoxContainer> = {
  title: "layout/BoxContainer",
  component: BoxContainer,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<IBoxContainer> = (args) => {
  return (
    <>
      <BoxContainer {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <div>Content</div>,
  height: "100px",
  width: "200px",
  backgroundColor: `${inube.palette.neutral.N50}`,
  boxSizing: "border-box",
  borderRadius: "10px",
  borderColor: `${inube.palette.neutral.N100}`,
  padding: "10px",
};

export default meta;
