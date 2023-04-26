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

Default.args = {
    OfficialNameOfScholarship: "MA Educational Practice and Research Scholarship",
    ResultsPanel: [
        {
            "itemTitle": "CountryRegion",
            "itemData": [
                "International",
                "Any",
                "UK",
                "EU",
                "Europe",
                "East Anglia",
                "Norfolk/Suffolk",
                "London",
                "North East of England"
            ]
        },
        {
            "itemTitle": "Years",
            "itemData": "2023"
        },
        {
            "itemTitle": "ApplicantsNationality",
            "itemData": "Any"
        },
        {
            "itemTitle": "CountryOfDomicile",
            "itemData": "Any"
        },
        {
            "itemTitle": "AnnualValue",
            "itemData": ""
        },
        {
            "itemTitle": "AcademicExcellence",
            "itemData": ""
        }
    ],
    buttonText: "View more"
}