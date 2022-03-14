import React from "react";
import { Meta, Story } from "@storybook/react";
import { DescriptionList, Props } from "../components/DescriptionList";

const meta: Meta = {
  title: "Description List",
  component: DescriptionList,
};

export default meta;

const Template: Story<Props> = (args) => <DescriptionList {...args} />;

export const Default = Template.bind({});
export const TwoCol = Template.bind({});

Default.args = {
  listItems: [
    { term: "Descriptive Term", description: "Description for the descriptive term" },
    { term: "Descriptive Term", description: "Description for the descriptive term" },
    { term: "Descriptive Term", description: "Description for the descriptive term" },
    { term: "Descriptive Term", description: "Description for the descriptive term" },
    { term: "Descriptive Term", description: "Description for the descriptive term" },
  ],
};
TwoCol.args = {
  listItems: [
    { term: "Descriptive Term", description: "Description for the descriptive term" },
    { term: "Descriptive Term", description: "Description for the descriptive term" },
    { term: "Descriptive Term", description: "Description for the descriptive term" },
    { term: "Descriptive Term", description: "Description for the descriptive term" },
    { term: "Descriptive Term", description: "Description for the descriptive term" },
  ],
  columns: 2,
};
