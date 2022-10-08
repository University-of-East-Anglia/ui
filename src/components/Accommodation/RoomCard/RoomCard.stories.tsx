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
  roomAmount: [{ value: "514 rooms", label: "514 rooms" }],
  perFlat: [{ value: "All en suite", label: "All en suite" }],
  roomType: [{ value: "Mostly 12 rooms per flat", label: "Mostly 12 rooms per flat" }],
  roomPrice: [{ value: "£156.38 a week", label: "£156.38 a week" }],
  title: "En Suite Hickling & Barton",
  excerpt: "Hickling House and Barton House are two of our newest residences, built in 2016.",
  header: "Accommodation",
  image: "https://picsum.photos/400/300",
};
