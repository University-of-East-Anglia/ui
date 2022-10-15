import React from "react";
import { Meta, Story } from "@storybook/react";
import { MoreWithVideo, Props } from "./MoreWithVideo";

const meta: Meta = {
  title: "Accommodation/More Detail With Video",
  component: MoreWithVideo,
};

export default meta;

const Template: Story<Props> = (args) => <MoreWithVideo {...args} />;

export const Default = Template.bind({});

Default.args = {
  room_title: "Premier Accommodation",
  banner_title: "Find out what our students think!",
  roomAmount: [{ value: "4 Available", label: "4 Available" }],
  roomPrice: [{ value: "£208.13 a week", label: "£208.13 a week" }],
  excerpt:
    "Featuring an entrance hall, bedroom with single bed, spacious shower room, lounge/dinner with sofa, and kitchen.",
  excerpt_title: "Premier Ziggurat Flats, Norfolk Terrace",
  map_title: "Floor Plan",
  image: "https://picsum.photos/400/300",
  videoUrl: "https://player.vimeo.com/video/344988769",
  controls: true,
};
