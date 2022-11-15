import React from "react";
import "./Hero.scss";

export interface Props {
    variant: "default" | "shallow" | "deep";
    header?: string;
    uppercase: true | false;
    image?: string;
    alt: string;
}

export const Hero = ({ header, ...props }: Props) => {

    return (
        <div className="hero-container">
            <img className={props.variant} src={props.image} alt={props.alt}></img>
            <div className="header">
                <h1 className={props.uppercase ? 'uppercase' : ""}>
                    {header}
                </h1>
            </div>
        </div>
    );
};