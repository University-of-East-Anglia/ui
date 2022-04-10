import React from "react";
import { Meta, Story } from "@storybook/react";
import { SinglePage, ComponentProps } from "./SinglePage";

const meta: Meta = {
  title: "Single Page",
  component: SinglePage,
};

export default meta;

const Template: Story<ComponentProps> = (args) => <SinglePage {...args} />;

export const Default = Template.bind({});

Default.args = {
  kd_school: "Computer Science",
  kd_schoolURL: "https://www.uea.ac.uk/about/school-of-computing-sciences",
  kd_courseTitle: "BSc Computing Science with a Year in Industry",
  kd_keyDetails: [
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
  navItems: [
    { anchor: "item 1", url: "https://www.uea.ac.uk" },
    { anchor: "item 2", url: "https://www.uea.ac.uk" },
    { anchor: "item 3", url: "https://www.uea.ac.uk" },
    { anchor: "item 4", url: "https://www.uea.ac.uk" },
  ],
  cta_title1: "Reversed CTA",
  cta_link1: "https://www.uea.ac.uk",
  cta_reverse1: true,
  cta_title2: "Default CTA",
  cta_link2: "https://www.uea.ac.uk",
  cta_reverse2: false,
  accordion: [
    {
      title: "Title 1",
      content:
        "Ex est duis sit nostrud magna pariatur irure est excepteur magna dolore culpa commodo in. Laboris nisi aute duis anim duis velit ex anim do sint proident. Esse ea qui excepteur ad. Tempor eiusmod mollit ex mollit fugiat sint aliquip nostrud amet do enim. Amet veniam aliqua eiusmod consectetur nostrud qui dolore irure occaecat do esse eiusmod.",
    },
    {
      title: "Title 2",
      content:
        "Cupidatat laboris minim reprehenderit ea dolor. Do aliquip reprehenderit fugiat eiusmod non. Fugiat tempor proident voluptate nisi sunt Lorem exercitation commodo. Lorem occaecat dolore Lorem velit veniam magna velit. Proident eu consequat dolor dolore mollit culpa officia amet proident. Do velit officia commodo dolor labore nostrud dolor.Consectetur quis ea consectetur ullamco ullamco nostrud amet Lorem proident irure. Magna laborum nisi aliqua nisi amet officia officia officia et ex occaecat id est. Dolor aliqua laboris aliqua occaecat ea dolore. Ipsum laborum anim voluptate cupidatat nostrud eiusmod cillum incididunt proident nostrud consequat aliquip in. Consequat laborum esse aute amet.",
    },
    {
      title: "Title 3",
      content:
        "Cupidatat laboris minim reprehenderit ea dolor. Do aliquip reprehenderit fugiat eiusmod non. Fugiat tempor proident voluptate nisi sunt Lorem exercitation commodo. Lorem occaecat dolore Lorem velit veniam magna velit. Proident eu consequat dolor dolore mollit culpa officia amet proident. Do velit officia commodo dolor labore nostrud dolor.Consectetur quis ea consectetur ullamco ullamco nostrud amet Lorem proident irure. Magna laborum nisi aliqua nisi amet officia officia officia et ex occaecat id est. Dolor aliqua laboris aliqua occaecat ea dolore. Ipsum laborum anim voluptate cupidatat nostrud eiusmod cillum incididunt proident nostrud consequat aliquip in. Consequat laborum esse aute amet.",
    },
  ],
};
