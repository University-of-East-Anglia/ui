import React from "react";
import { Meta, Story } from "@storybook/react";
import { Footer, Props } from "./Footer";

const meta: Meta = {
  title: "Footer/Footer",
  component: Footer,
};

export default meta;

const Template: Story<Props> = (args) => <Footer {...args} />;

export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = {
  background: "light",
};
Dark.args = {
  background: "dark",
};
