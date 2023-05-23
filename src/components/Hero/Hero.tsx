import React from "react";
import "./Hero.scss";

import { Image } from "../Image";

export interface Props {
    variant: "default" | "shallow" | "deep";
    header?: string;
    uppercase: true | false;
    image?: string;
    alt: string;
    position: "middle" | "bottom";
    subtext?: string;
    srcSet?: HTMLImageElement;
}

export const Hero = ({ header, ...props }: Props) => {

    return (
        <div className="hero-container">
            {props.image && <Image className={props.variant} src={props.image} alt={props.alt} />}
            {props.srcSet && props.srcSet}
            <div className={`header ${props.position}`}>
                <div>
                    <h1 className={props.uppercase ? 'uppercase' : ''}>
                        {header}
                    </h1>
                    {props.subtext && <p className="subtext">{props.subtext}</p>}
                </div>
            </div>
            <div className="gradient"></div>
        </div>
    );
};