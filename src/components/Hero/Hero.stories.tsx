import React from "react";
import { Meta, Story } from "@storybook/react";
import { Hero, Props } from "./Hero";

const meta: Meta = {
    title: "Molecule Components/Hero",
    component: Hero,
};

export default meta;

const Template: Story<Props> = (args) => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = {
    variant: "default",
    header: "Hero Banner Title",
    uppercase: false,
    image: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg",
    position: "bottom",
    subtext: "Hero Banner Subtext"
};