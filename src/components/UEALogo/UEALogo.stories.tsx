import React from "react";
import { Meta, Story } from "@storybook/react";
import { UEALogo, Props } from "./UEALogo";

const meta: Meta = {
    title: "Header/--UEA Logo",
    component: UEALogo,
};

export default meta;

const Template: Story<Props> = (args) => <UEALogo {...args} />;

export const Default = Template.bind({});
export const Blue = Template.bind({});
export const Black = Template.bind({});
export const Orange = Template.bind({});
export const Lilac = Template.bind({});
export const Green = Template.bind({});

Default.args = {
    glint: undefined,
};
Blue.args = {
    glint: "blue",
};
Black.args = {
    glint: "black",
};
Orange.args = {
    glint: "orange",
};
Lilac.args = {
    glint: "lilac",
};
Green.args = {
    glint: "green",
};
