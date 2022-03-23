import React from "react";
import { Meta, Story } from "@storybook/react";
import { CTA, Props } from "./CTA";

const meta: Meta = {
    title: "CTA/CTA Button",
    component: CTA,
};

export default meta;

const Template: Story<Props> = (args) => <CTA {...args} />;

export const Default = Template.bind({});
export const Reverse = Template.bind({});

Default.args = {
    title: "Title",
    link: "https://www.uea.ac.uk",
};
Reverse.args = {
    title: "Reversed",
    link: "https://www.uea.ac.uk",
    reverse: true,
};
