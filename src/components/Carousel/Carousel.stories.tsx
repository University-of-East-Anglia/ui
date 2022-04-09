import React from "react";
import { Meta, Story } from "@storybook/react";
import { Carousel, ComponentProps } from "./Carousel";

const meta: Meta = {
  title: "Molecule Components/Carousel",
  component: Carousel,
};

export default meta;

const Template: Story<ComponentProps> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});

Default.args = {
  slides: [
    {
      image: "https://picsum.photos/400/300",
      type: "27th January 2022",
      excerpt: "This is a default card component",
      link: "https://www.uea.ac.uk",
      anchor: "Card link",
      title: "Card 1",
    },
    {
      image: "https://picsum.photos/400/300",
      type: "27th January 2022",
      excerpt: "This is a default card component",
      link: "https://www.uea.ac.uk",
      anchor: "Card link",
      title: "Card 2",
    },
    {
      image: "https://picsum.photos/400/300",
      type: "27th January 2022",
      excerpt: "This is a default card component",
      link: "https://www.uea.ac.uk",
      anchor: "Card link",
      title: "Card 2",
    },
  ],
};
