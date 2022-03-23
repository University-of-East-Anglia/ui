import React, { HTMLAttributes, ReactNode } from "react";
import "../App.scss";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
}

export const Button = ({ children, ...props }: Props) => {
    let buttonClass =
        props.variant === "primary"
            ? "bg-magenta-default border-2 border-magenta-default rounded-md text-white no-underline font-bold text-center hover:bg-white hover:text-magenta-default mb-6"
            : "bg-cyan-default border-2 border-cyan-default rounded-md text-black-default no-underline font-bold text-center hover:bg-white hover:text-cyan-default mb-6";
    var size: string;
    switch (props.size) {
        case "small":
            var size = "p-2 text-sm";
            break;
        case "large":
            var size = "p-4 text-lg";
            break;
        default:
            var size = "p-2";
    }
    return (
        <button className={buttonClass + " " + size} {...props}>
            {children}
        </button>
    );
};
