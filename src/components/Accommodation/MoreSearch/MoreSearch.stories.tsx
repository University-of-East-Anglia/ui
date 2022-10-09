import React from "react";
import { Meta, Story } from "@storybook/react";
import { MoreSearch } from "./MoreSearch";
import "../../App.scss";

const meta: Meta = {
  title: "Accommodation/More Search",
  component: MoreSearch,
};

export default meta;

const Template: Story = (args) => <MoreSearch {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Find Your Perfect Room",
  bathroom_title: "Bathroom Facilities",
  location_title: "Location",
  resident_title: "Number of Residents In A Flat",
  price_title: "Price",
  shared_title: "Shared Room?",
  study_title: "Study Level",
  family_title: "Family House",
  bed_title: "Bed Size",
  tooltip: "Lorem ipsum",
  suite_label: "En Suite",
  shared_label: "Shared Bathroom",
  cheap_label: "£",
  average_label: "££",
  expensive_label: "£££",
  twin_label: "Yes, Twin",
  bunk_label: "Yes, Bunk",
  no_label: "No",
  undergraduate_label: "Undergraduate",
  postgraduate_label: "Postgraduate",
  accept_label: "Yes",
  reject_label: "No",
  double_label: "Double",
  single_label: "Single",
  all_label: "All",
  placeholder: "Select...",
  locations: [
    { value: "Campus", label: "Campus" },
    { value: "City", label: "City" },
  ],
  residents: [
    { value: "2", label: "2" },
    { value: "5", label: "5" },
    { value: "8", label: "8" },
    { value: "10", label: "10" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "15", label: "15" },
  ],
};
