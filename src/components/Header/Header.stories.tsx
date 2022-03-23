import React from "react";
import { Meta, Story } from "@storybook/react";
import { Header, Props } from "./Header";

const meta: Meta = {
    title: "Header/--Header",
    component: Header,
};

export default meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Default = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const XLarge = Template.bind({});
export const XXLarge = Template.bind({});

Default.args = {
    size: "large",
    children: "Default Header",
};

Medium.args = {
    size: "medium",
    children: "X-Large Header",
};

Large.args = {
    size: "large",
    children: "2X-Large Header",
};

XLarge.args = {
    size: "x-large",
    children: "4X-Large Header",
};

XXLarge.args = {
    size: "xx-large",
    children: "7X-Large Header",
};
