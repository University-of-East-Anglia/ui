import React from "react";
import "../Lists.scss";

export interface Props {
    listItems?: string[];
}

interface linkObj {
    name: string;
    content: {
        title: string;
        url: string;
    };
    uuid: string;
}

export const HorizontalList = (props: Props) => {
    return (
        <>
            <ul className="list--horizontal list--none">
                {props.listItems.map((item, key) => {
                    return (
                        <li key={key} className="list--listitem">{item}</li>
                    )
                })}
            </ul>
        </>
    );
};
