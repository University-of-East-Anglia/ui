import React from "react";
import { Meta, Story } from "@storybook/react";
import { ContentWithImage, Props } from "./ContentWithImage";

const meta: Meta = {
  title: "Accommodation/Content With Image",
  component: ContentWithImage,
};

export default meta;

const Template: Story<Props> = (args) => <ContentWithImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Costs and What's Included In Your Room",
  smallTitle: "All our student accommodation has everything you need - it's a home away from home.",
  paragraphFirst:
    "Your room will be fully furnished with a bed, mattress, desk, chair, wardrobe, drawers, shelves, blinds/curtains and noticeboard. You'll also have access to a bathroom, either en suite or shared, depending on the type of room and a kitchen. ",
  paragraphSecond:
    "If you fancy a change from cooking you can explore our on-campus cafes and restaurants and we've also got plenty of other study spaces to explore, such as the library and the student's union.",
  paragraphThird:
    "Our campus is very safe with a 24 hour security team and a friendly accommodation warden in each residence.",
  paragraphFourth:
    "Our best value room is £72.73 a week and our most luxurious option is £264.32 a week. The cost for accommodation includes heating, electricity, high-speed internet. Your contract will be for the length of your course-usually 38 weeks if you're an undergraduate student, and 50 weeks if you're a postgraduate student.",
  imageTop: "https://picsum.photos/440/360",
  imageBottom: "https://picsum.photos/220/360",
};
