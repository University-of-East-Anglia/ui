import React from "react";
import { Meta, Story } from "@storybook/react";
import { RoomDetailWithImage, Props } from "./RoomDetailWithImage";

const meta: Meta = {
  title: "Accommodation/Room Detail With Image",
  component: RoomDetailWithImage,
};

export default meta;

const Template: Story<Props> = (args) => <RoomDetailWithImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  room_title: "En-Suite Hickling & Barton",
  amount_title: "514 rooms",
  bath_title: "",
  image: "https://picsum.photos/400/300",
  excerpt:
    "A scholarship is usually awarded on merit, such as achieving high grades. A bursary is usually awarded on need, such as having a lower household income. Scholarships and bursaries can be awarded as cash or as tuition fee reductions. As long as you keep to the terms of the award is yours to keep - you don't pay it back",
  title: "What is the difference between a scholarship and a bursary?",
  altText: "Scholarships Banner",
};
