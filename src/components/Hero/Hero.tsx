import React from "react";
import "../App.scss";

export interface Props {
    variant: "shallow" | "deep";
    children?: string;
}

export const Hero = ({ children, ...props }: Props) => {
    let height: string =
        props.variant === "deep" ? "h-60 sm:h-96 md:h-100" : "h-32 sm:h-48 md:h-72";
    let heroClass: string = "w-full object-cover";
    return (
        <div className="relative flex items-center justify-center" {...props}>
            {children ? (
                <h1 className="absolute font-bold text-white text-7xl">{children}</h1>
            ) : null}
            <img
                className={heroClass + " " + height}
                src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg"
                alt=""
            />
        </div>
    );
};
