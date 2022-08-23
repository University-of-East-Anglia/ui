import React from "react";
import { Meta, Story } from "@storybook/react";
import { Search } from "./InstantSearch";
import "../App.scss";

const meta: Meta = {
  title: "Instant Search",
  component: Search,
};

export default meta;

const Template: Story = (args) => <Search {...args} />;

export const Default = Template.bind({});

Default.args = {
  page_title: "UI Algolia Search",
  index_name: "crawler_www.uea.ac.uk",
  placeholder: "Search...",
};
