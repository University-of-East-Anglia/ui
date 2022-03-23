import React from "react";
import { Meta, Story } from "@storybook/react";
import { DescriptionList, Props } from "./DescriptionList";

const meta: Meta = {
    title: "List/Description List",
    component: DescriptionList,
};

export default meta;

const Template: Story<Props> = (args) => <DescriptionList {...args} />;

export const Default = Template.bind({});

Default.args = {
    listItems: [
        { term: "Descriptive Term", description: "Description for the descriptive term" },
        { term: "Descriptive Term", description: "Description for the descriptive term" },
        { term: "Descriptive Term", description: "Description for the descriptive term" },
        { term: "Descriptive Term", description: "Description for the descriptive term" },
        { term: "Descriptive Term", description: "Description for the descriptive term" },
    ],
};
