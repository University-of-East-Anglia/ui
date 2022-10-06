import React from "react";
import { Meta, Story } from "@storybook/react";
import { LessWithImage, Props } from "./LessWithImage";

const meta: Meta = {
  title: "Accommodation/Less Room Detail With Image",
  component: LessWithImage,
};

export default meta;

const Template: Story<Props> = (args) => <LessWithImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  room_title: "Premier Accommodation",
  roomAmount: [{ value: "1 available", label: "1 available" }],
  roomPrice: [{ value: "£264.32 a week", label: "£264.32 a week" }],
  excerpt:
    "Featuring an entrance hall, bedroom with double bed, study area, kitchen/dinner, lounge area, shower room, and balcony.",
  excerpt_title: "One Bedroom Premier Flat, Colman House",
  image: "https://picsum.photos/400/300",
};
