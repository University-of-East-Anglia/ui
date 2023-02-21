import React from "react";
import { Meta, Story } from "@storybook/react";
import { UEAGlint, Props } from "./UEAGlints";

const meta: Meta = {
  title: "Atomic Components/Icons/UEA Glint",
  component: UEAGlint,
};

export default meta;

const Template: Story<Props> = (args) => <UEAGlint {...args} />;

export const Default = Template.bind({});
export const Blue = Template.bind({});
export const Black = Template.bind({});
export const Orange = Template.bind({});
export const Lilac = Template.bind({});
export const Green = Template.bind({});

Default.args = {
  glint: undefined,
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
