import React from "react";
import { Meta, Story } from "@storybook/react";
import { CTAWithImage, Props } from "./CTAWithImage";

const meta: Meta = {
    title: "CTA/CTA With Background Image",
    component: CTAWithImage,
};

export default meta;

const Template: Story<Props> = (args) => <CTAWithImage {...args} />;

export const Default = Template.bind({});
export const WithContent = Template.bind({});
export const PinkBg = Template.bind({});

Default.args = {
    title: "Title",
    anchor: "Link Here",
    link: "https://www.uea.ac.uk",
    image: "https://picsum.photos/900/300",
    bgcolour: "blue",
};
WithContent.args = {
    title: "Title",
    content: "Content here is optional",
    anchor: "Link Here",
    link: "https://www.uea.ac.uk",
    image: "https://picsum.photos/900/300",
    bgcolour: "blue",
};
PinkBg.args = {
    title: "Title",
    anchor: "Link Here",
    link: "https://www.uea.ac.uk",
    image: "https://picsum.photos/900/300",
    bgcolour: "pink",
};
