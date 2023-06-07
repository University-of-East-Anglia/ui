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
        <div className="hero">
            {props.image && <Image className={props.variant} src={props.image} alt={props.alt} />}
            {props.srcSet && props.srcSet}
            <div className={`hero__header ${props.position}`}>
                <div className="hero__content">
                    <h1 className={props.uppercase ? 'uppercase' : ''}>
                        {header}
                    </h1>
                    {props.subtext && <p className="hero__header__subtext">{props.subtext}</p>}
                </div>
            </div>
            <div className="hero__gradient"></div>
        </div>
    );
};