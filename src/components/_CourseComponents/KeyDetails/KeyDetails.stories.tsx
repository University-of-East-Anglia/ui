import React from "react";
import { Meta, Story } from "@storybook/react";
import { KeyDetails, ComponentProps } from "./KeyDetails";

const meta: Meta = {
  title: "Key Details",
  component: KeyDetails,
};

export default meta;

const Template: Story<ComponentProps> = (args) => <KeyDetails {...args} />;

export const Default = Template.bind({});

Default.args = {
  school: "Computer Science",
  schoolURL: "https://www.uea.ac.uk/about/school-of-computing-sciences",
  courseTitle: "BSc Computing Science with a Year in Industry",
  keyDetails: [
    {
      term: "Attendance",
      description: "Full Time",
    },
    {
      term: "Award",
      description: "Degree of Bachelor of Science",
    },
    {
      term: "UCAS Course Code",
      description: "G401",
    },
    {
      term: "Entry Requirements",
      description: "AAB",
    },
    {
      term: "Fees",
      description: "£9000",
    },
    {
      term: "Course Length",
      description: "3/4 Years",
    },
  ],
};
