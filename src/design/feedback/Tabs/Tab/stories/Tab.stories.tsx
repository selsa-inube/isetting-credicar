import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";
import { TabController } from "./TabController";
import { Tab, ITab } from "../index";

const meta: Meta<typeof Tab> = {
  component: Tab,
  title: "navigation/Tab",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<ITab> = (args) => <TabController {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "thisIsAnId",
  disabled: false,
  label: "General Information",
};

export const Notification = Template.bind({});
Notification.args = {
  id: "thisIsAnId",
  disabled: false,
  label: "General Information",
  notificationIndicators: 3,
};

export default meta;
