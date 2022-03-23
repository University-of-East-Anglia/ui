import React from "react";
import { Meta, Story } from "@storybook/react";
import { OrderedList, Props } from "./OrderedList";

const meta: Meta = {
    title: "List/Ordered List",
    component: OrderedList,
};

export default meta;

const Template: Story<Props> = (args) => <OrderedList {...args} />;

export const Default = Template.bind({});

Default.args = {
    listItems: ["item 1", "item 2"],
};
