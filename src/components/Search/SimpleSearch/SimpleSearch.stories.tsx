import React from "react";
import { Meta, Story } from "@storybook/react";
import { SimpleSearch } from "./SimpleSearch";
import "../../App.scss";

const meta: Meta = {
  title: "Simple Search",
  component: SimpleSearch,
};

export default meta;

const Template: Story = (args) => <SimpleSearch {...args} />;

export const Default = Template.bind({});

Default.args = {
  index_name: "crawler_www.uea.ac.uk",
  placeholder: "Search...",
  hits_returned: 6,
};
