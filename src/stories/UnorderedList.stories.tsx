import React from "react";
import { Meta, Story } from "@storybook/react";
import { UnorderedList, Props } from "../components/UnorderedList";

const meta: Meta = {
  title: "Unordered List",
  component: UnorderedList,
};

export default meta;

const Template: Story<Props> = (args) => <UnorderedList {...args} />;

export const Default = Template.bind({});

Default.args = {
  listItems: ["item 1", "item 2"],
};