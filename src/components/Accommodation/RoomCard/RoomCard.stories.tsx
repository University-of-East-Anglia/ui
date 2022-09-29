import React from "react";
import { Meta, Story } from "@storybook/react";
import { RoomCard, Props } from "./RoomCard";

const meta: Meta = {
  title: "Accommodation/Room Card",
  component: RoomCard,
};

export default meta;

const Template: Story<Props> = (args) => <RoomCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    { id: 1, item: "514 rooms" },
    { id: 2, item: "Mostly 12 rooms per flat" },
    { id: 3, item: "All en suite" },
    { id: 4, item: "£156.38 a week" },
  ],
  title: "En Suite Hickling & Barton",
  excerpt: "Hickling House and Barton House are two of our newest residences, built in 2016.",
  header: "Accommodation",
};
