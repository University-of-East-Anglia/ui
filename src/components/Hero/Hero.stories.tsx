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
    headerBackground: false,
    uppercase: false,
    src: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg",
    srcSet: "https://a.storyblok.com/f/185167/1440x810/2ff766c5a8/ziggarut-accomodation.jpeg/m/640x500/ 640w, https://a.storyblok.com/f/185167/1440x810/2ff766c5a8/ziggarut-accomodation.jpeg/m/1024x500/ 1024w, https://a.storyblok.com/f/185167/1440x810/2ff766c5a8/ziggarut-accomodation.jpeg/m/1280x500/ 1280w",
    sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 1280px",
    position: "bottom",
    subtext: "Hero Banner Subtext",
    subtextLink:"https://www.uea.ac.uk",
    gradient: true,
};