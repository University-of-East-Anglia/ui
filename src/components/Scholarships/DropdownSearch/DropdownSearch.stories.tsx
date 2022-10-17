import React from "react";
import { Meta, Story } from "@storybook/react";
import { DropdownSearch } from "./DropdownSearch";
import "../../App.scss";

const meta: Meta = {
  title: "Scholarships/Dropdown Search",
  component: DropdownSearch,
};

export default meta;

const Template: Story = (args) => <DropdownSearch {...args} />;

export const Default = Template.bind({});

Default.args = {
  page_title: "Discover which scholarships you could be eligible for:",
  degrees_placeholder: "Degree level...",
  degrees: [
    { value: "Postgraduate Taught", label: "Postgraduate Taught" },
    { value: "Postgraduate Research", label: "Postgraduate Research" },
    { value: "PCGE", label: "PCGE" },
    { value: "Undergraduate", label: "Undergraduate" },
    { value: "Year Abroad", label: "Year Abroad" },
    { value: "MBA", label: "MBA" },
  ],
  year_placeholder: "Year of entry...",
  years: [
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ],
  nationality_placeholder: "Nationality...",
  nationalities: [
    { value: "International", label: "International" },
    { value: "North America", label: "North America" },
    { value: "Norfolk/Suffolk", label: "Norfolk/Suffolk" },
    { value: "Any", label: "Any" },
    { value: "UK", label: "UK" },
    { value: "EU", label: "EU" },
    { value: "Europe", label: "Europe" },
    { value: "East Anglia", label: "East Anglia" },
    { value: "London", label: "London" },
    { value: "North East of England", label: "North East of England" },
    { value: "Middle East", label: "Middle East" },
    { value: "Asia", label: "Asia" },
    { value: "South America", label: "South America" },
    { value: "Africa", label: "Africa" },
  ],
};
