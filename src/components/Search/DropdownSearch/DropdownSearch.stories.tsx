import React from "react";
import { Meta, Story } from "@storybook/react";
import { DropdownSearch } from "./DropdownSearch";
import "../../App.scss";

const meta: Meta = {
  title: "Dropdown Search",
  component: DropdownSearch,
};

export default meta;

const Template: Story = (args) => <DropdownSearch {...args} />;

export const Default = Template.bind({});

Default.args = {
  index_name: "crawler_www.uea.ac.uk",
  placeholder: "Degree level...",
};
