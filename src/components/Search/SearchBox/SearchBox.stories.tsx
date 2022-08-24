import React from "react";
import { Meta, Story } from "@storybook/react";
import { UISearchBox } from "./SearchBox";
import "../../App.scss";

const meta: Meta = {
  title: "SearchBox",
  component: UISearchBox,
};

export default meta;

const Template: Story = (args) => <UISearchBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  index_name: "crawler_www.uea.ac.uk",
  placeholder: "Search...",
  search_on_type: true,
  hits_returned: 12,
};
