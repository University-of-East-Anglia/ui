import React from "react";
import { Meta, Story } from "@storybook/react";
import { InfoContent, Props } from "./InfoContent";

const meta: Meta = {
  title: "Scholarships/Info Content",
  component: InfoContent,
};

export default meta;

const Template: Story<Props> = (args) => <InfoContent {...args} />;

export const Default = Template.bind({});

Default.args = {
  link: "https://www.uea.ac.uk",
  anchor: "Gov.uk Student Finance Calculater",
  contents: [
    {
      header: "Tuition fee loans",
      content:
        "The UK government offers tuition fee loans to students from the UK and the EU, to cover the cost of tuition fees.Many students take out this loan to cover the cost of tuition, as it's a straightforward and cost-eefective wat to cover the cost. You only pay back the loan once you've graduated and earning more than £25,000 a year. ",
    },
    {
      header: "Maintenance loans",
      content:
        "The UK government also offer maintenance loans, to cover your living costs at university. How much you receive will depend on your household income.You pay back the maintenance loan in the same way as the tuition fee loan: when you've graduated and are earning more than £25,000 a year.",
    },
    {
      header: "Extra support",
      content:
        "If you're disabled, a parent, or have someone who depends on you financialy, then you may be able to receive additional money from the government. If you experience unexpected financial problems while you're at university you might also be eligible for additional funding from UEA.  ",
    },
  ],
};
