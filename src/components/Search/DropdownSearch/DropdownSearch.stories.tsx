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
  page_title: "Discover which scholarships you could be eligible for:",
  placeholder: "Degree level...",
  options: [
    { value: "Postgraduate Taught", label: "Postgraduate Taught" },
    { value: "Postgraduate Research", label: "Postgraduate Research" },
    { value: "PCGE", label: "PCGE" },
    { value: "Undergraduate", label: "Undergraduate" },
    { value: "Year Abroad", label: "Year Abroad" },
    { value: "MBA", label: "MBA" },
  ],
};
