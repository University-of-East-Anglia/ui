import React from "react";
import { Meta, Story } from "@storybook/react";
import { Video, ComponentProps } from "./Video";
import "../App.scss";

const meta: Meta = {
  title: "Atomic Components/Video",
  component: Video,
};

export default meta;

const Template: Story<ComponentProps> = (args) => <Video {...args} />;

export const YouTube = Template.bind({});
export const Vimeo = Template.bind({});

YouTube.args = {
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  controls: false,
};

Vimeo.args = {
  videoUrl: "https://player.vimeo.com/video/344988769",
  controls: true,
};
