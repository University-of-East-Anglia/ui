import React from "react";
import { Meta, Story } from "@storybook/react";
import { ScholarshipsFinder } from "./ScholarshipsFinder";
import "../../App.scss";

const meta: Meta = {
  title: "Scholarships/Scholarships Finder",
  component: ScholarshipsFinder,
};

export default meta;

const Template: Story = (args) => <ScholarshipsFinder {...args} />

export const Default = Template.bind({});

Default.args = {
  storyBlokCardObjects:
    [
      {
        "Logo": [],
        "_uid": "218fb1a5-8192-4686-b7e6-c92c6418ed7d",
        "Years": "",
        "Course": "",
        "Subject": "",
        "Criteria": "",
        "component": "GS030",
        "Categories": [],
        "TotalValue": "",
        "AnnualValue": "",
        "FundingType": "",
        "ResultsPanel": [],
        "TypeOfCourse": "",
        "CountryRegion": "",
        "SchoolFaculty": "",
        "FurtherCriteria": "",
        "TotalValueRange": "",
        "CountryofDomicile": "",
        "URLforDetailsPage": "",
        "AcademicExcellence": "",
        "ApplicationProcess": "",
        "TermsAndConditions": {
          "type": "doc",
          "content": [
            {
              "type": "paragraph"
            }
          ]
        },
        "RelatedScholarships": "",
        "AdditionalInformation": {
          "type": "doc",
          "content": [
            {
              "type": "paragraph"
            }
          ]
        },
        "ApplicantsNationality": "",
        "NumberAvailablePerYear": "",
        "URLforDetailsPageTarget": false,
        "OfficialNameOfScholarship": "UEA PGCE Bursary",
        "RestrictionsWithOtherScholarships": "",
        "_editable": "<!--#storyblok#{\"name\": \"GS030\", \"space\": \"185167\", \"uid\": \"218fb1a5-8192-4686-b7e6-c92c6418ed7d\", \"id\": \"237040829\"}-->"
      },
      {
        "_uid": "45d77a18-4fee-4730-9c0c-918382eb362c",
        "Years": "2023",
        "Course": "Any",
        "Subject": "Any",
        "Criteria": "Study Abroad Scholarship",
        "component": "GS030",
        "Categories": [],
        "TotalValue": "3000",
        "AnnualValue": "3000",
        "FundingType": "Tuition Fees",
        "ResultsPanel": [],
        "TypeOfCourse": "Any",
        "CountryRegion": "Any",
        "SchoolFaculty": "Any",
        "FurtherCriteria": "Any",
        "TotalValueRange": "",
        "CountryofDomicile": "Any",
        "URLforDetailsPage": "/study/fees-and-funding/scholarships-finder/scholarships-a-z/international-country-award",
        "AcademicExcellence": "",
        "ApplicationProcess": "",
        "TermsAndConditions": {
          "type": "doc",
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "text": "Any",
                  "type": "text"
                }
              ]
            }
          ]
        },
        "RelatedScholarships": "",
        "AdditionalInformation": {
          "type": "doc",
          "content": [
            {
              "type": "paragraph"
            }
          ]
        },
        "ApplicantsNationality": "Any",
        "NumberAvailablePerYear": "1",
        "URLforDetailsPageTarget": false,
        "OfficialNameOfScholarship": "International Country Award",
        "RestrictionsWithOtherScholarships": "Any",
        "_editable": "<!--#storyblok#{\"name\": \"GS030\", \"space\": \"185167\", \"uid\": \"45d77a18-4fee-4730-9c0c-918382eb362c\", \"id\": \"236915845\"}-->"
      }
    ]
}