import React, { HTMLAttributes, ReactNode } from "react";
import "./Button.scss";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  width?: "full";
}

export const Button = ({ children, ...props }: Props) => {
  let buttonClass = props.variant === "primary" ? "button-primary" : "button-secondary";

  return (
    <button className={`${buttonClass} ${props.width}`} {...props}>
      {children}
    </button>
  );
};
