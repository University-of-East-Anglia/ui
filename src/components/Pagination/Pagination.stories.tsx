import React from "react";
import { Meta, Story } from "@storybook/react";
import { Pagination, Props } from "./Pagination";

const meta: Meta = {
  title: "Molecule Components/Pagination",
  component: Pagination,
};

export default meta;

const Template: Story<Props> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

Default.args = {
  pages: 6,
  currentPage: 3,
  baseUrl: "/page/",
};
