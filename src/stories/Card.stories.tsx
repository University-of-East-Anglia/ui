import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card, Props } from "../components/Card";

const meta: Meta = {
    title: "Card",
    component: Card,
};

export default meta;

const Template: Story<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
    image: "https://www.placekitten.com/400x300",
    bgcolor: "",
    type: "",
    excerpt: "This is default holding text for a card excerpt",
    link: "https://www.uea.ac.uk",
    anchor: "Card link",
    title: "Card Title",
    variant: "primary",
};
