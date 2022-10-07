import React from "react";
import { Meta, Story } from "@storybook/react";
import { UEANumbers, Props } from "./UEANumbers";

const meta: Meta = {
  title: "Accommodation/UEA In Numbers",
  component: UEANumbers,
};

export default meta;

const Template: Story<Props> = (args) => <UEANumbers {...args} />;

export const Default = Template.bind({});

Default.args = {
  keyvalues: [
    { itemtitle: "4,300", itemdata: "Student rooms" },
    { itemtitle: "£72", itemdata: "To £264 a week in rent" },
    { itemtitle: "8", itemdata: "Minutes average walk time to the library" },
    { itemtitle: "XX", itemdata: "Typical broadband internet speed" },
    { itemtitle: "2 Grade II", itemdata: "Listed accommodation buildings" },
  ],
  title: "UEA In Numbers",
};
