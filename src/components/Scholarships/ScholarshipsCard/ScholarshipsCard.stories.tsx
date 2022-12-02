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
}

  // Body:
  //   {
  //     "_uid": "ed6b1cc5-356a-42a2-821b-7d2f624230dd",
  //     "Years": "2023",
  //     "Course": "",
  //     "Subject": "",
  //     "Criteria": "",
  //     "component": "GS030",
  //     "Categories": [],
  //     "TotalValue": "2815",
  //     "AnnualValue": "",
  //     "FundingType": "Tuition Fees",
  //     "ResultsPanel": [],
  //     "TypeOfCourse": "Postgraduate Taught",
  //     "CountryRegion": "Norfolk/Suffolk",
  //     "SchoolFaculty": "Education",
  //     "FurtherCriteria": "You are working in a UEA target Outreach school. A full list of these are listed below.",
  //     "TotalValueRange": "",
  //     "CountryofDomicile": "Any",
  //     "URLforDetailsPage": "/study/fees-and-funding/scholarships-finder/scholarships-a-z/ma-educational-practice-and-research-scholarship",
  //     "AcademicExcellence": "",
  //     "ApplicationProcess": "",
  //     "TermsAndConditions": {
  //       "type": "doc",
  //       "content": [
  //         {
  //           "type": "paragraph",
  //           "content": [
  //             {
  //               "text": "General Terms and Conditions",
  //               "type": "text",
  //               "marks": [
  //                 {
  //                   "type": "link",
  //                   "attrs": {
  //                     "href": "https://www.uea.ac.uk/study/fees-and-funding/scholarships-finder/general-terms-and-conditions",
  //                     "uuid": null,
  //                     "anchor": null,
  //                     "target": null,
  //                     "linktype": "url"
  //                   }
  //                 },
  //                 {
  //                   "type": "bold"
  //                 },
  //                 {
  //                   "type": "underline"
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     "RelatedScholarships": "",
  //     "AdditionalInformation": {
  //       "type": "doc",
  //       "content": [
  //         {
  //           "type": "paragraph"
  //         }
  //       ]
  //     },
  //     "ApplicantsNationality": "Any",
  //     "NumberAvailablePerYear": "",
  //     "URLforDetailsPageTarget": false,
  //     "OfficialNameOfScholarship": "MA Educational Practice and Research Scholarship",
  //     "RestrictionsWithOtherScholarships": "",
  //     "_editable": "<!--#storyblok#{\"name\": \"GS030\", \"space\": \"154676\", \"uid\": \"ed6b1cc5-356a-42a2-821b-7d2f624230dd\", \"id\": \"225821753\"}-->"
  //   },
// };