import React from "react";
import "./Hero.scss";

import { Image } from "../Image";
import { CTA } from "../CTAs/CTA";

export interface Props {
    variant: "default" | "shallow" | "deep";
    header?: string;
    headerBackground?: true | false;
    uppercase: true | false;
    src: string;
    srcSet?: string;
    sizes?: string;
    alt: string;
    position: "middle" | "bottom";
    subtext?: string;
    subtextLink?: string;
    gradientColour?: "black" | "white";
    bottomGradient?: boolean;
    topGradient?: boolean;
}

export const Hero = ({ header, ...props }: Props) => {

    return (
        <div className="hero">
            <Image className={props.variant} src={props.src} srcSet={props.srcSet} sizes={props.sizes} alt={props.alt} />
            <div className={`hero__header ${props.position}`}>
                <div className="hero__content">
                    <h1 className={ `${props.uppercase && 'uppercase'} ${props.headerBackground && 'background'}` }>
                        {header}
                    </h1>
                    {props.subtext && 
                        props.subtextLink ?
                        <span className="hero__header__sublink">
                            <CTA title={props.subtext} link={props.subtextLink} />
                        </span>
                         :
                        <p className="hero__header__subtext">{props.subtext}</p>
                    }
                </div>
            </div>
            {props.topGradient && <div className={`hero__topGradient--${props.gradientColour}`}></div>}
            {props.bottomGradient && <div className={`hero__bottomGradient--${props.gradientColour}`}></div>}
        </div>
    );
};