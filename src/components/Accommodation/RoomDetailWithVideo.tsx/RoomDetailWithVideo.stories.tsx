import React from "react";
import { Meta, Story } from "@storybook/react";
import { RoomDetailWithVideo, Props } from "./RoomDetailWithVideo";

const meta: Meta = {
  title: "Accommodation/Room Detail With Video",
  component: RoomDetailWithVideo,
};

export default meta;

const Template: Story<Props> = (args) => <RoomDetailWithVideo {...args} />;

export const Default = Template.bind({});

Default.args = {
  room_title: "En-Suite Hickling & Barton",
  banner_title: "Find out what our students think!",
  image_title: "Caption would go here",
  roomAmount: [{ value: "514 rooms", label: "514 rooms" }],
  perFlat: [{ value: "All en suite", label: "All en suite" }],
  roomType: [{ value: "Mostly 12 rooms per flat", label: "Mostly 12 rooms per flat" }],
  roomPrice: [{ value: "£156.38 a week", label: "£156.38 a week" }],
  excerpt: "Hickling House and Barton House are two of our newest residences, built in 2016.",
  map_title: "Floor Plan",
  image: "https://picsum.photos/400/300",
  videoUrl: "https://player.vimeo.com/video/344988769",
  controls: true,
};
