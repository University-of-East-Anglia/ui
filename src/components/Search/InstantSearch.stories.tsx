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
export const WithDateFilter = Template.bind({});

Default.args = {
  page_title: "UI Algolia Search",
  index_name: "crawler_www.uea.ac.uk",
  placeholder: "Search...",
  refinement_filters: [
    { heading: "Clearing Vacancies", attribute: "clearing" },
    { heading: "Department", attribute: "department" },
  ],
  has_date_filter: false,
  per_page: 12,
};

WithDateFilter.args = {
  page_title: "UI Algolia Search",
  index_name: "test_news",
  placeholder: "Search...",
  refinement_filters: [
    { heading: "Clearing Vacancies", attribute: "clearing" },
    { heading: "Department", attribute: "department" },
  ],
  has_date_filter: true,
  per_page: 12,
  date_attribute: "publish_at",
};
