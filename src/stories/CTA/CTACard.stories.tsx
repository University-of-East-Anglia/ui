import React from "react";
import { Meta, Story } from "@storybook/react";
import { CTACard, Props } from "../../components/CTACard";

const meta: Meta = {
  title: "CTA Card",
  component: CTACard,
};

export default meta;

const Template: Story<Props> = (args) => <CTACard {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Title",
  anchor: "Link Here",
  link: "https://www.uea.ac.uk",
};