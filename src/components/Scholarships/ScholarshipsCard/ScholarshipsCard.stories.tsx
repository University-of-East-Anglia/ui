import React from "react";
import { Meta, Story } from "@storybook/react";
import { ScholarshipsCard, Props } from "./ScholarshipsCard";

const meta: Meta = {
  title: "Scholarships/Scholarships Card",
  component: ScholarshipsCard,
};

export default meta;

const Template: Story<Props> = (args) => <ScholarshipsCard {...args} />;

export const Default = Template.bind({});

// Default.args = {
//   keyvalues: [
//     { itemtitle: "Value", itemdata: "£3,000" },
//     { itemtitle: "Number of years", itemdata: "3" },
//     { itemtitle: "Total Value", itemdata: "£9,000" },
//     { itemtitle: "Level", itemdata: "Undergraduate" },
//     { itemtitle: "Applicant Nationality", itemdata: "UK" },
//   ],
//   title: "Difference Undergraduate",
//   header: "Scholarship",
// };

Default.args = {
  OfficialNameOfScholarship: "MA Educational Practice and Research Scholarship",
  ResultsPanel: [
    {
        "itemTitle": "AnnualValue",
        "itemData": "2000"
    },
    {
        "itemTitle": "CountryRegion",
        "itemData": "London"
    },
    {
        "itemTitle": "CountryOfDomicile",
        "itemData": "Aland Islands"
    },
    {
        "itemTitle": "AcademicExcellence",
        "itemData": "something"
    },
    {
        "itemTitle": "ApplicationProcess",
        "itemData": ""
    },
    {
      "itemTitle": "Restrictions With The Other Scholarships",
      "itemData": "something"
    },
  ],
  buttonText: "View more"
}