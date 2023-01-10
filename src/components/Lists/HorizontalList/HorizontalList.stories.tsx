import React from "react";
import { Meta, Story } from "@storybook/react";
import { HorizontalList, Props } from "./HorizontalList";

const meta: Meta = {
    title: "List/Horizontal List",
    component: HorizontalList,
};

export default meta;

const Template: Story<Props> = (args) => <HorizontalList {...args} />;

export const Default = Template.bind({});

Default.args = {
    listItems: ["item 1", "item 2","item 3","item 4"]
};
