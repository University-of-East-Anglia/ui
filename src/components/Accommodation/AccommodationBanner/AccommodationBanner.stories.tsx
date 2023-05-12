import React from "react";
import { Meta, Story } from "@storybook/react";
import { AccommodationBanner, Props } from "./AccommodationBanner";

const meta: Meta = {
    title: "Accommodation/Accommodation Banner",
    component: AccommodationBanner,
};

export default meta;

const Template: Story<Props> = (args) => <AccommodationBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
    BannerTitle: "UEA in Numbers",
    BannerItems: [
        {
            "itemStat": "4,300",
            "itemDescription": "student rooms"
        },
        {
            "itemStat": "£72",
            "itemDescription": "to £264 in rent"
        },
        {
            "itemStat": "8",
            "itemDescription": "minute average walk time to the library"
        }
    ]
}