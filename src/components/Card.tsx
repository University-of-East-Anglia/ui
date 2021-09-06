import React from "react";
import Link from "./Link";
import "../App.css";

export interface Props {
    image: string;
    bgcolor?: string;
    type: string;
    excerpt: string;
    link: string;
    anchor: string;
    title: string;
    variant: "primary" | "secondary";
}

export const Card = ({ ...props }: Props) => {
    let cardClass: string = "w-full sm:w-1/3 border-2 border-magenta-default rounded-lg";

    return (
        <div className={cardClass}>
            <div className="card-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card-tags"></div>
            <div className="p-6">
                {props.type ? <span className="type">{props.type}</span> : null}
                <h2 className="card-content--title">{props.title}</h2>
                {props.excerpt ? <p>{props.excerpt}</p> : null}
                <Link variant={props.variant} link={props.link} anchor={props.anchor} />
            </div>
        </div>
    );
};
