import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card, Props } from "./Card";

const meta: Meta = {
    title: "Molecule Components/Card",
    component: Card,
};

export default meta;

const Template: Story<Props> = (args) => <div style={{width:"350px"}}><Card {...args} /></div>;

export const Default = Template.bind({});
export const Standard = Template.bind({});
export const Clearing = Template.bind({});

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

Clearing.args = {
    image: "https://picsum.photos/400/300",
    link: "https://www.uea.ac.uk/uea-life/student-support",
    type: "",
    excerpt: "We know that university life is made up of much more than studying. Find out how we will support you all through your university journey.",
    anchor: "Read more",
    title: "How can we support you?",
    class: "clearing-card"
};