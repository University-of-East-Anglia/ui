import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card, Props } from "./Card";

const meta: Meta = {
    title: "Card",
    component: Card,
};

export default meta;

const Template: Story<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
    image: "https://picsum.photos/400/300",
    type: "27th January 2022",
    excerpt: "This is a default card component and can be used in a grid to get required layout",
    link: "https://www.uea.ac.uk",
    anchor: "Card link",
    title: "Card",
};
