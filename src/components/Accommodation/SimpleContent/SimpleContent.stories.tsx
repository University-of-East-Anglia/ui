import React from "react";
import { Meta, Story } from "@storybook/react";
import { SimpleContent, Props } from "./SimpleContent";

const meta: Meta = {
  title: "Accommodation/Simple Content",
  component: SimpleContent,
};

export default meta;

const Template: Story<Props> = (args) => <SimpleContent {...args} />;

export const Default = Template.bind({});

Default.args = {
  header: "Where Will You Be Living?",
  content:
    "UEA is friendly, safe and fun university and living in student accommodation is the best way to experience the unique UEA campus atmosphere. As a first year undergraduate you're guaranted a room in our student accommodation, which means that from the very first day you'll be right in the heart of our campus community, meeting other students and making new friends.  ",
};
