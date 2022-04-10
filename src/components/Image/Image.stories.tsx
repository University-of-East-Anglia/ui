import React from "react";
import { Meta, Story } from "@storybook/react";
import { Image, ComponentProps } from "./Image";
import "../App.scss";

const meta: Meta = {
  title: "Atomic Components/Image",
  component: Image,
};

export default meta;

const Template: Story<ComponentProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
export const WithSize = Template.bind({});

Default.args = {
  src: "https://picsum.photos/400/300",
  alt: "Image from Picsum",
};

WithSize.args = {
  src: "https://picsum.photos/800/800",
  alt: "Image from Picsum With Size Attributes",
  height: "400px",
  width: "300px",
};
