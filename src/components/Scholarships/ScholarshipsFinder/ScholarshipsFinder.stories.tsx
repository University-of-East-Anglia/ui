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
  storyBlokCardObjects: {
    "allStoryblokEntry": {
      "totalCount": 5,
      "edges": [
        {
          "node": {
            "content": "{\"body\":[{\"_uid\":\"52f0f153-5788-4910-8a13-3f0e2dfed131\",\"Years\":\"\",\"Course\":\"\",\"Subject\":\"\",\"Criteria\":\"\",\"component\":\"GS030\",\"Categories\":[],\"TotalValue\":\"800\",\"AnnualValue\":\"\",\"FundingType\":\"Cash\",\"ResultsPanel\":[],\"TypeOfCourse\":\"PGCE\",\"CountryRegion\":\"\",\"SchoolFaculty\":\"Any\",\"FurtherCriteria\":\"\",\"TotalValueRange\":\"\",\"CountryofDomicile\":\"\",\"URLforDetailsPage\":\"\",\"AcademicExcellence\":\"\",\"ApplicationProcess\":\"\",\"TermsAndConditions\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\"}]},\"RelatedScholarships\":\"\",\"AdditionalInformation\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\"}]},\"ApplicantsNationality\":\"\",\"NumberAvailablePerYear\":\"\",\"URLforDetailsPageTarget\":false,\"OfficialNameOfScholarship\":\"Music Centre Award\",\"RestrictionsWithOtherScholarships\":\"\",\"_editable\":\"<!--#storyblok#{\\\"name\\\": \\\"GS030\\\", \\\"space\\\": \\\"154676\\\", \\\"uid\\\": \\\"52f0f153-5788-4910-8a13-3f0e2dfed131\\\", \\\"id\\\": \\\"227428562\\\"}-->\"}],\"_uid\":\"60cba627-b511-4d90-8bdd-c9115decb52c\",\"title\":\"Music Centre Award\",\"Button\":[],\"component\":\"tpl001\",\"_editable\":\"<!--#storyblok#{\\\"name\\\": \\\"tpl001\\\", \\\"space\\\": \\\"154676\\\", \\\"uid\\\": \\\"60cba627-b511-4d90-8bdd-c9115decb52c\\\", \\\"id\\\": \\\"227428562\\\"}-->\"}"
          }
        },
        {
          "node": {
            "content": "{\"body\":[{\"_uid\":\"5e980958-4319-48be-9f79-a30329f12b7e\",\"Years\":\"2023\",\"Course\":\"\",\"Subject\":\"\",\"Criteria\":\"\",\"component\":\"GS030\",\"Categories\":[],\"TotalValue\":\"4000\",\"AnnualValue\":\"\",\"FundingType\":\"Tuition Fees\",\"ResultsPanel\":[],\"TypeOfCourse\":\"Undergraduate\",\"CountryRegion\":\"International\",\"SchoolFaculty\":\"Music\",\"FurtherCriteria\":\"\",\"TotalValueRange\":\"\",\"CountryofDomicile\":\"Any\",\"URLforDetailsPage\":\"/study/fees-and-funding/scholarships-finder/scholarships-a-z/international-country-award\",\"AcademicExcellence\":\"\",\"ApplicationProcess\":\"\",\"TermsAndConditions\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\"}]},\"RelatedScholarships\":\"\",\"AdditionalInformation\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\"}]},\"ApplicantsNationality\":\"Any\",\"NumberAvailablePerYear\":\"\",\"URLforDetailsPageTarget\":false,\"OfficialNameOfScholarship\":\"International Country Award\",\"RestrictionsWithOtherScholarships\":\"\",\"_editable\":\"<!--#storyblok#{\\\"name\\\": \\\"GS030\\\", \\\"space\\\": \\\"154676\\\", \\\"uid\\\": \\\"5e980958-4319-48be-9f79-a30329f12b7e\\\", \\\"id\\\": \\\"227114243\\\"}-->\"}],\"_uid\":\"b8fc38a2-d3c3-44ed-bf8f-2a40d8bc3db6\",\"title\":\"\",\"Button\":[],\"component\":\"tpl001\",\"_editable\":\"<!--#storyblok#{\\\"name\\\": \\\"tpl001\\\", \\\"space\\\": \\\"154676\\\", \\\"uid\\\": \\\"b8fc38a2-d3c3-44ed-bf8f-2a40d8bc3db6\\\", \\\"id\\\": \\\"227114243\\\"}-->\"}"
          }
        },
        {
          "node": {
            "content": "{\"body\":[{\"_uid\":\"40d5dc05-e8f0-4b8b-8aa7-299833bb7970\",\"Years\":\"2023\",\"Course\":\"\",\"Subject\":\"\",\"Criteria\":\"\",\"component\":\"GS030\",\"Categories\":[],\"TotalValue\":\"\",\"AnnualValue\":\"\",\"FundingType\":\"Cash\",\"ResultsPanel\":[],\"TypeOfCourse\":\"PGCE\",\"CountryRegion\":\"\",\"SchoolFaculty\":\"Education\",\"FurtherCriteria\":\"\",\"TotalValueRange\":\"\",\"CountryofDomicile\":\"\",\"URLforDetailsPage\":\"\",\"AcademicExcellence\":\"\",\"ApplicationProcess\":\"\",\"TermsAndConditions\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\"}]},\"RelatedScholarships\":\"\",\"AdditionalInformation\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\"}]},\"ApplicantsNationality\":\"\",\"NumberAvailablePerYear\":\"\",\"URLforDetailsPageTarget\":false,\"OfficialNameOfScholarship\":\"UEA PGCE Bursary\",\"RestrictionsWithOtherScholarships\":\"\",\"_editable\":\"<!--#storyblok#{\\\"name\\\": \\\"GS030\\\", \\\"space\\\": \\\"154676\\\", \\\"uid\\\": \\\"40d5dc05-e8f0-4b8b-8aa7-299833bb7970\\\", \\\"id\\\": \\\"227106795\\\"}-->\"}],\"_uid\":\"3ba8a1ec-44cd-42d8-9297-cddf1dcf5e76\",\"title\":\"\",\"Button\":[],\"component\":\"tpl001\",\"_editable\":\"<!--#storyblok#{\\\"name\\\": \\\"tpl001\\\", \\\"space\\\": \\\"154676\\\", \\\"uid\\\": \\\"3ba8a1ec-44cd-42d8-9297-cddf1dcf5e76\\\", \\\"id\\\": \\\"227106795\\\"}-->\"}"
          }
        },
        {
          "node": {
            "content": "{\"body\":[{\"_uid\":\"3dad0735-6c2f-4138-9437-30f6f348b6b1\",\"Years\":\"2023\",\"Course\":\"\",\"Subject\":\"\",\"Criteria\":\"\",\"component\":\"GS030\",\"Categories\":[],\"TotalValue\":\"\",\"AnnualValue\":\"\",\"FundingType\":\"\",\"ResultsPanel\":[],\"TypeOfCourse\":\"PGCE\",\"CountryRegion\":\"UK\",\"SchoolFaculty\":\"Education\",\"FurtherCriteria\":\"\",\"TotalValueRange\":\"\",\"CountryofDomicile\":\"\",\"URLforDetailsPage\":\"\",\"AcademicExcellence\":\"\",\"ApplicationProcess\":\"\",\"TermsAndConditions\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\"}]},\"RelatedScholarships\":\"\",\"AdditionalInformation\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\"}]},\"ApplicantsNationality\":\"\",\"NumberAvailablePerYear\":\"\",\"URLforDetailsPageTarget\":false,\"OfficialNameOfScholarship\":\"PGCE Teaching Scholarships\",\"RestrictionsWithOtherScholarships\":\"\",\"_editable\":\"<!--#storyblok#{\\\"name\\\": \\\"GS030\\\", \\\"space\\\": \\\"154676\\\", \\\"uid\\\": \\\"3dad0735-6c2f-4138-9437-30f6f348b6b1\\\", \\\"id\\\": \\\"225839906\\\"}-->\"}],\"_uid\":\"1db3bd27-bef2-4595-96fd-ee454a688a03\",\"Years\":\"\",\"title\":\"PGCE Teaching Scholarships\",\"Button\":[],\"Course\":\"\",\"Subject\":\"\",\"Criteria\":\"\",\"component\":\"tpl001\",\"Categories\":[],\"TotalValue\":\"\",\"AnnualValue\":\"\",\"FundingType\":\"\",\"ResultsPanel\":[],\"TypeOfCourse\":\"\",\"CountryRegion\":\"\",\"SchoolFaculty\":\"\",\"FurtherCriteria\":\"\",\"TotalValueRange\":\"\",\"CountryofDomicile\":\"\",\"URLforDetailsPage\":\"\",\"AcademicExcellence\":\"\",\"ApplicationProcess\":\"\",\"TermsAndConditions\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\"}]},\"RelatedScholarships\":\"\",\"AdditionalInformation\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\"}]},\"ApplicantsNationality\":\"\",\"NumberAvailablePerYear\":\"\",\"URLforDetailsPageTarget\":false,\"OfficialNameOfScholarship\":\"\",\"RestrictionsWithOtherScholarships\":\"\",\"_editable\":\"<!--#storyblok#{\\\"name\\\": \\\"tpl001\\\", \\\"space\\\": \\\"154676\\\", \\\"uid\\\": \\\"1db3bd27-bef2-4595-96fd-ee454a688a03\\\", \\\"id\\\": \\\"225839906\\\"}-->\"}"
          }
        },
        {
          "node": {
            "content": "{\"body\":[{\"_uid\":\"ed6b1cc5-356a-42a2-821b-7d2f624230dd\",\"Years\":\"2023\",\"Course\":\"\",\"Subject\":\"\",\"Criteria\":\"\",\"component\":\"GS030\",\"Categories\":[],\"TotalValue\":\"2815\",\"AnnualValue\":\"\",\"FundingType\":\"Tuition Fees\",\"ResultsPanel\":[],\"TypeOfCourse\":\"Postgraduate Taught\",\"CountryRegion\":\"Norfolk/Suffolk\",\"SchoolFaculty\":\"Education\",\"FurtherCriteria\":\"You are working in a UEA target Outreach school. A full list of these are listed below.\",\"TotalValueRange\":\"\",\"CountryofDomicile\":\"Any\",\"URLforDetailsPage\":\"/study/fees-and-funding/scholarships-finder/scholarships-a-z/ma-educational-practice-and-research-scholarship\",\"AcademicExcellence\":\"\",\"ApplicationProcess\":\"\",\"TermsAndConditions\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"content\":[{\"text\":\"General Terms and Conditions\",\"type\":\"text\",\"marks\":[{\"type\":\"link\",\"attrs\":{\"href\":\"https://www.uea.ac.uk/study/fees-and-funding/scholarships-finder/general-terms-and-conditions\",\"uuid\":null,\"anchor\":null,\"target\":null,\"linktype\":\"url\"}},{\"type\":\"bold\"},{\"type\":\"underline\"}]}]}]},\"RelatedScholarships\":\"\",\"AdditionalInformation\":{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\"}]},\"ApplicantsNationality\":\"Any\",\"NumberAvailablePerYear\":\"\",\"URLforDetailsPageTarget\":false,\"OfficialNameOfScholarship\":\"MA Educational Practice and Research Scholarship\",\"RestrictionsWithOtherScholarships\":\"\",\"_editable\":\"<!--#storyblok#{\\\"name\\\": \\\"GS030\\\", \\\"space\\\": \\\"154676\\\", \\\"uid\\\": \\\"ed6b1cc5-356a-42a2-821b-7d2f624230dd\\\", \\\"id\\\": \\\"225821753\\\"}-->\"}],\"_uid\":\"c844f0ed-f8cc-4df8-8d48-4014138af985\",\"title\":\"MA Educational Practice and Research Scholarship\",\"Button\":[],\"component\":\"tpl001\",\"_editable\":\"<!--#storyblok#{\\\"name\\\": \\\"tpl001\\\", \\\"space\\\": \\\"154676\\\", \\\"uid\\\": \\\"c844f0ed-f8cc-4df8-8d48-4014138af985\\\", \\\"id\\\": \\\"225821753\\\"}-->\"}"
          }
        }
      ]
    }
  }
}