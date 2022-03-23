import React from "react";
import { Meta, Story } from "@storybook/react";
import { Select, Props } from "./Select";
import "../App.scss";

const meta: Meta = {
    title: "Select Element",
    component: Select,
};

export default meta;

const Template: Story<Props> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
    title: "Select Fruit",
    defaultValue: { value: "A", label: "Apple" },
    options: [
        { value: "A", label: "Apple" },
        { value: "B", label: "Banana" },
        { value: "O", label: "Orange" },
        { value: "P", label: "Pineapple" },
    ],
};
