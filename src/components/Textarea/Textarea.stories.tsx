import React from "react";
import { Meta, Story } from "@storybook/react";
import { Textarea, Props } from "./Textarea";

const meta: Meta = {
    title: "Textarea",
    component: Textarea,
};

export default meta;

const Template: Story<Props> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});

Default.args = {
    content:
        "Irure nostrud sunt id fugiat ut proident reprehenderit. Amet occaecat ad laborum nisi. Do cillum officia non sunt. Id est qui ipsum minim pariatur labore consectetur esse. Proident voluptate non ullamco Lorem adipisicing ut aute sint ad. Dolore ut labore nostrud ut officia. Pariatur nulla nostrud id laboris quis laboris enim est nisi eu esse consectetur. Pariatur nostrud ex dolore sunt commodo qui Lorem reprehenderit deserunt ullamco qui in excepteur. Labore deserunt minim ut esse aliquip qui id. Esse cupidatat aute anim nostrud officia dolore irure enim ad aute consectetur in aliquip irure. Dolor ut sint et ut. Non magna dolor officia dolore eu mollit excepteur sit dolore cillum velit est. Cupidatat eu mollit in ut mollit ex aute nostrud ipsum. Esse nulla do reprehenderit commodo quis culpa ex magna ex exercitation.",
};
