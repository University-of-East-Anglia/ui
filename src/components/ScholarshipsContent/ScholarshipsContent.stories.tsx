import React from "react";
import { Meta, Story } from "@storybook/react";
import { ScholarshipsContent, Props } from "./ScholarshipsContent";

const meta: Meta = {
  title: "Scholarships Content",
  component: ScholarshipsContent,
};

export default meta;

const Template: Story<Props> = (args) => <ScholarshipsContent {...args} />;

export const Default = Template.bind({});

Default.args = {
  header: "Scholarships and Loans",
  content:
    "We want the brighest and best students to come to UEA and we don't believe that the cost of university should ever be a barrier to a fantastic education. For this reason we offer almost one hundred different scholarships and bursaries. ",
};
