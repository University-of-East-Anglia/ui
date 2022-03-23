import React from "react";
import { Meta, Story } from "@storybook/react";
import { Hero, Props } from "./Hero";

const meta: Meta = {
    title: "--Hero",
    component: Hero,
};

export default meta;

const Template: Story<Props> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
export const Shallow = Template.bind({});

Default.args = {
    variant: "deep",
    children: "Hero Banner",
};

Shallow.args = {
    variant: "shallow",
};
