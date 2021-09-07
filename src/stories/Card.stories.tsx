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
export const ThreeCols = Template.bind({});
export const TwoCols = Template.bind({});

Default.args = {
  image: "https://picsum.photos/400/300",
  bgcolor: "",
  type: "",
  excerpt: "This is a default 4 column holding text for a card excerpt",
  link: "https://www.uea.ac.uk",
  anchor: "Card link",
  title: "4 Column Card",
  variant: "primary",
  columns: 4,
};

ThreeCols.args = {
  image: "https://picsum.photos/600/400",
  bgcolor: "",
  type: "",
  excerpt: "This is a 3 column holding text for a card excerpt",
  link: "https://www.uea.ac.uk",
  anchor: "Card link",
  title: "3 Column Card",
  variant: "primary",
  columns: 3,
};

TwoCols.args = {
  image: "https://picsum.photos/600/600",
  bgcolor: "",
  type: "",
  excerpt: "This is a two column holding text for a card excerpt",
  link: "https://www.uea.ac.uk",
  anchor: "Card link",
  title: "2 Column Card",
  variant: "primary",
  columns: 2,
};
