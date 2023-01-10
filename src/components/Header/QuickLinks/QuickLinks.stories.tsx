import React from "react";
import { Meta, Story } from "@storybook/react";
import { QuickLinks } from "./QuickLinks";

const meta: Meta = {
  title: "Header/Quick Links",
  component: QuickLinks,
};

export default meta;

const Template: Story<Props> = (args) => <QuickLinks {...args} />;

export const Default = Template.bind({});

Default.args = {
  quickLinksArray: [
    {
      "uuid": "fffa2ab6-25a9-4a35-84ff-1fc1c5f991c7",
      "name": "Research",
      "content": {
        "title": "Research",
        "url": "/Research"
      }
    },
    {
      "uuid": "eac2ce55-f301-4dca-a566-80a0d0050af2",
      "name": "Campus",
      "content": {
        "title": "Campus",
        "url": "/Campus"
      }
    },
    {
      "uuid": "1f7009ba-3670-4700-a040-b1712c003a72",
      "name": "International",
      "content": {
        "title": "International",
        "url": "/International"
      }
    }
  ],
};