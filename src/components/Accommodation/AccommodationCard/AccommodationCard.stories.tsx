import React from "react";
import { Meta, Story } from "@storybook/react";
import { AccommodationCard, Props } from "./AccommodationCard";

const meta: Meta = {
    title: "Accommodation/Accommodation Card",
    component: AccommodationCard,
};

export default meta;

const Template: Story<Props> = (args) => <AccommodationCard {...args} />;

export const Default = Template.bind({});

Default.args = {
    AccommodationName: "En Suite INTO",
    image: "https://www.uea.ac.uk/documents/20142/121361/INTO-UEA-accommodation-single-bedroom.jpg",
    overview: "View more",
    rooms: 33,
    bathroom: "En Suite",
    occupancy_text: "6-13",
    cost: 90.30,
    url: "/uea-life/accommodation/en-suite-into"
}