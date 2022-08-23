import React from "react";
import { Meta, Story } from "@storybook/react";
import { Heading, Props } from "./Heading";
import "../App.scss";

const meta: Meta = {
  title: "Atomic Components/Heading",
  component: Heading,
};

export default meta;

const Template: Story<Props> = (args) => <Heading {...args} />;

export const XSmall = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const XLarge = Template.bind({});
export const XXLarge = Template.bind({});
export const XXXLarge = Template.bind({});

XSmall.args = {
  title: "X Small Heading",
  headingSize: "xs",
};
Small.args = {
  title: "Small Heading",
  headingSize: "sm",
};
Medium.args = {
  title: "Medium Heading",
  headingSize: "md",
};
Large.args = {
  title: "Large Heading",
  headingSize: "lg",
};
XLarge.args = {
  title: "X Large Heading",
  headingSize: "xl",
};
XXLarge.args = {
  title: "2X Large Heading",
  headingSize: "2xl",
};
XXXLarge.args = {
  title: "3X Large Heading",
  headingSize: "3xl",
};
