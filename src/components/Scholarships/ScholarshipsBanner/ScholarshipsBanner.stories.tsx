import React from "react";
import { Meta, Story } from "@storybook/react";
import { ScholarshipsBanner, Props } from "./ScholarshipsBanner";

const meta: Meta = {
  title: "Scholarships/Scholarships Banner",
  component: ScholarshipsBanner,
};

export default meta;

const Template: Story<Props> = (args) => <ScholarshipsBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: "https://picsum.photos/400/300",
  excerpt:
    "A scholarship is usually awarded on merit, such as achieving high grades. A bursary is usually awarded on need, such as having a lower household income. Scholarships and bursaries can be awarded as cash or as tuition fee reductions. As long as you keep to the terms of the award is yours to keep - you don't pay it back",
  title: "What is the difference between a scholarship and a bursary?",
  altText: "Scholarships Banner",
};
