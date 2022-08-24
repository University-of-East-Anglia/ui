import React from "react";
import { Meta, Story } from "@storybook/react";
import { Input, ComponentProps } from "./Input";
import "../App.scss";

const meta: Meta = {
  title: "Atomic Components/Input",
  component: Input,
};

export default meta;

const Template: Story<ComponentProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
export const RedirectQuery = Template.bind({});

Default.args = {
  id: "simpleInput",
  label: "Simple Input",
  placeholder: "Name",
};
RedirectQuery.args = {
  id: "redirectInput",
  label: "Redirect Input",
  destination_url: "https://testwww.uea.ac.uk/course-finder/?crawler_courses%5Bquery%5D=",
  placeholder: "Search...",
};
