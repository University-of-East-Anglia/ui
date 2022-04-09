import React from "react";
import { Meta, Story } from "@storybook/react";
import { ProfileCard, Props } from "./ProfileCard";

const meta: Meta = {
  title: "Profile Card",
  component: ProfileCard,
};

export default meta;

const Template: Story<Props> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: "https://picsum.photos/400/300",
  link: "https://www.uea.ac.uk",
  subTitle: "Profile card subtitle",
  title: "Profile Card",
};
