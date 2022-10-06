import React from "react";
import { Meta, Story } from "@storybook/react";
import { LessWithVideo, Props } from "./LessWithVideo";

const meta: Meta = {
  title: "Accommodation/Less Room Detail With Video",
  component: LessWithVideo,
};

export default meta;

const Template: Story<Props> = (args) => <LessWithVideo {...args} />;

export const Default = Template.bind({});

Default.args = {
  roomAmount: [{ value: "4 available", label: "4 available" }],
  roomPrice: [{ value: "£208.13 a week", label: "£208.13 a week" }],
  excerpt:
    "Featuring an entrance hall, bedroom with single bed, spacious shower room, lounge/dinner with sofa, and kitchen.",
  excerpt_title: "Premier Ziggurat Flats, Norfolk Terrace",
  videoUrl: "https://player.vimeo.com/video/344988769",
  controls: true,
};
