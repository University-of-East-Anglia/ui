import React from "react";
import { Meta, Story } from "@storybook/react";
import { Logo, Props } from "../components/Logo";

const meta: Meta = {
  title: "Header/--UEA Logo",
  component: Logo,
};

export default meta;

const Template: Story<Props> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
export const Blue = Template.bind({});
export const Black = Template.bind({});
export const Orange = Template.bind({});
export const Lilac = Template.bind({});
export const Green = Template.bind({});

Default.args = {
  glint: "",
};
Blue.args = {
  glint: "blue",
};
Black.args = {
  glint: "black",
};
Orange.args = {
  glint: "orange",
};
Lilac.args = {
  glint: "lilac",
};
Green.args = {
  glint: "green",
};
