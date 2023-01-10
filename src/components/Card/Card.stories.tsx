import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card, Props } from "./Card";

const meta: Meta = {
    title: "Molecule Components/Card",
    component: Card,
};

export default meta;

const Template: Story<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});
export const Standard = Template.bind({});

Default.args = {
    image: "https://picsum.photos/400/300",
    type: "27th January 2022",
    excerpt: "This is a default card component and can be used in a grid to get required layout",
    link: "https://www.uea.ac.uk",
    anchor: "Card link",
    title: "Card",
};

Standard.args = {
    image: "https://picsum.photos/400/300",
    link: "https://www.uea.ac.uk",
    type: "not used",
    excerpt: "not used",
    anchor: "see more",
    title: "International and EU scholarships",
    class: "standard-card"
};