import React from "react";
import { Meta, Story } from "@storybook/react";
import { OrderedList, Props } from "../components/OrderedList";

const meta: Meta = {
  title: "Ordered List",
  component: OrderedList,
};

export default meta;

const Template: Story<Props> = (args) => <OrderedList {...args} />;

export const Default = Template.bind({});

Default.args = {
  listItems: ["item 1", "item 2"],
};
