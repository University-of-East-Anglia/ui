import React from "react";
import { Meta, Story } from "@storybook/react";
import { Header, Props } from "./Header";

const meta: Meta = {
  title: "Header/--Header",
  component: Header,
};

export default meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Light = Template.bind({});
export const Dark = Template.bind({});
export const Transparent = Template.bind({});

Light.args = {
  background: "light",
};
Dark.args = {
  background: "dark",
};
Transparent.args = {
  background: "transparent",
};
