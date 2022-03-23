import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, Props } from "./Button";

const meta: Meta = {
    title: "--Button",
    component: Button,
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Secondary = Template.bind({});
export const Small = Template.bind({});
export const Large = Template.bind({});

Default.args = {
    variant: "primary",
    children: "Primary Button",
};

Secondary.args = {
    variant: "secondary",
    children: "Secondary Button",
};
Small.args = {
    size: "small",
    children: "Small Button",
};
Large.args = {
    size: "large",
    children: "Large Button",
};
