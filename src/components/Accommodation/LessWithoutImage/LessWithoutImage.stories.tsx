import React from "react";
import { Meta, Story } from "@storybook/react";
import { LessWithoutImage } from "./LessWithoutImage";
import "../../App.scss";

const meta: Meta = {
  title: "Accommodation/Less Search Without Image",
  component: LessWithoutImage,
};

export default meta;

const Template: Story = (args) => <LessWithoutImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Find Your Perfect Room",
  bathroom_title: "Bathroom Facilities",
  location_title: "Location",
  resident_title: "Number of Residents In A Flat",
  suite_label: "En Suite",
  shared_label: "Shared Bathroom",
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
