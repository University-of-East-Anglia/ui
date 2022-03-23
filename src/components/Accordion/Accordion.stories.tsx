import React from "react";
import { Meta, Story } from "@storybook/react";
import { Accordion, Props } from "./Accordion";

const meta: Meta = {
    title: "Accordion",
    component: Accordion,
};

export default meta;

const Template: Story<Props> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

Default.args = {
    accordion: [
        {
            title: "Title 1",
            content:
                "Ex est duis sit nostrud magna pariatur irure est excepteur magna dolore culpa commodo in. Laboris nisi aute duis anim duis velit ex anim do sint proident. Esse ea qui excepteur ad. Tempor eiusmod mollit ex mollit fugiat sint aliquip nostrud amet do enim. Amet veniam aliqua eiusmod consectetur nostrud qui dolore irure occaecat do esse eiusmod.",
        },
        {
            title: "Title 2",
            content:
                "Cupidatat laboris minim reprehenderit ea dolor. Do aliquip reprehenderit fugiat eiusmod non. Fugiat tempor proident voluptate nisi sunt Lorem exercitation commodo. Lorem occaecat dolore Lorem velit veniam magna velit. Proident eu consequat dolor dolore mollit culpa officia amet proident. Do velit officia commodo dolor labore nostrud dolor.Consectetur quis ea consectetur ullamco ullamco nostrud amet Lorem proident irure. Magna laborum nisi aliqua nisi amet officia officia officia et ex occaecat id est. Dolor aliqua laboris aliqua occaecat ea dolore. Ipsum laborum anim voluptate cupidatat nostrud eiusmod cillum incididunt proident nostrud consequat aliquip in. Consequat laborum esse aute amet.",
        },
        {
            title: "Title 3",
            content:
                "Cupidatat laboris minim reprehenderit ea dolor. Do aliquip reprehenderit fugiat eiusmod non. Fugiat tempor proident voluptate nisi sunt Lorem exercitation commodo. Lorem occaecat dolore Lorem velit veniam magna velit. Proident eu consequat dolor dolore mollit culpa officia amet proident. Do velit officia commodo dolor labore nostrud dolor.Consectetur quis ea consectetur ullamco ullamco nostrud amet Lorem proident irure. Magna laborum nisi aliqua nisi amet officia officia officia et ex occaecat id est. Dolor aliqua laboris aliqua occaecat ea dolore. Ipsum laborum anim voluptate cupidatat nostrud eiusmod cillum incididunt proident nostrud consequat aliquip in. Consequat laborum esse aute amet.",
        },
    ],
};
