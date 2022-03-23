import React from "react";
import "../Lists.scss";

export interface Props {
    listItems: string[];
}

export const OrderedList = (props: Props) => {
    return (
        <ol className="ml-4 list-decimal">
            {props.listItems.map((item) => (
                <li className="mb-2">{item}</li>
            ))}
        </ol>
    );
};
