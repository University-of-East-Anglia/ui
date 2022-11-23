import React from "react";
import { Meta, Story } from "@storybook/react";
import All_icons from "./All_icons";

const meta: Meta = {
  title: "Atomic Components/Icons",
  component: All_icons,
};

export default meta;

const Template: Story<Props> = (args) => <All_icons {...args} />;

export const Default = Template.bind({});

Default.args = {
  class: ''
}