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
  TotalValue: "2815",
  SchoolFaculty: "Education",
  Years: "2023",
  FundingType: "Tuition Fees",
  URLforDetailsPage: "/study/fees-and-funding/scholarships-finder/scholarships-a-z/ma-educational-practice-and-research-scholarship",
  ApplicantsNationality: "Any",
  TypeOfCourse: "Postgraduate Taught",
  buttonText: "View more"
}