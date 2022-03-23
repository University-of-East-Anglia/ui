import React from "react";
import { Meta, Story } from "@storybook/react";
import { SidebarNav, ComponentProps } from "./SidebarNav";

const meta: Meta = {
    title: "Sidebar Navigation",
    component: SidebarNav,
};

export default meta;

const Template: Story<ComponentProps> = (args) => <SidebarNav {...args} />;

export const Default = Template.bind({});

Default.args = {
    navItems: [
        { anchor: "item 1", url: "https://www.uea.ac.uk" },
        { anchor: "item 2", url: "https://www.uea.ac.uk" },
        { anchor: "item 3", url: "https://www.uea.ac.uk" },
        { anchor: "item 4", url: "https://www.uea.ac.uk" },
    ],
};
