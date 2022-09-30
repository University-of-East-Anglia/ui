import React from "react";
import { Meta, Story } from "@storybook/react";
import { ContentWithImage, Props } from "./ContentWithImage";

const meta: Meta = {
  title: "Accommodation/Content With Background Image",
  component: ContentWithImage,
};

export default meta;

const Template: Story<Props> = (args) => <ContentWithImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "How to Apply for Accommodation",
  paragraphFirst:
    "Once you've received a conditional or unconditional offer from us you can apply for your accommodation. We'll send you an email at that time, which explains what you need to do to apply. Every first year student is guaranteed a room in our student accommodation. When you apply we'll do our best to place you in your preferred option, but you'll also be asked to give a list of alternatives in case your first option is over-subscribed. ",
  paragraphSecond:
    "When you apply we'll ask if you have a disability, so that we can make provide you with the best accommodation for your needs. Please also let us know you would prefer to live in single-gender accommodation.",
  image: "https://picsum.photos/1440/655",
};
