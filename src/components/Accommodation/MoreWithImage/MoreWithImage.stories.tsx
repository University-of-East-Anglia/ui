import React from "react";
import { Meta, Story } from "@storybook/react";
import { MoreWithImage, Props } from "./MoreWithImage";

const meta: Meta = {
  title: "Accommodation/More Detail With Image",
  component: MoreWithImage,
};

export default meta;

const Template: Story<Props> = (args) => <MoreWithImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  room_title: "Premier Accommodation",
  banner_title: "Find out what our students think!",
  roomAmount: [{ value: "1 Available", label: "1 Available" }],
  roomPrice: [{ value: "£264.32 a week", label: "£264.32 a week" }],
  excerpt:
    "Featuring an entrance lobby, bedroom with double bed, study area, kitchen/dinner, lounge area, shower room, and balcony.",
  excerpt_title: "One Bedroom Premier Flat, Colman House",
  map_title: "Floor Plan",
  image: "https://picsum.photos/400/300",
  videoUrl: "https://player.vimeo.com/video/344988769",
  controls: true,
  slideImages: [
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
  ],
};
