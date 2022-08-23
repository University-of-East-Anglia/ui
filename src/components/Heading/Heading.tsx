import React, { HTMLAttributes, ReactNode } from "react";

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  headingSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

export const Heading = ({ children, ...props }: Props) => {
  let headingClass = props.headingSize;

  return (
    <span className={"ui-heading ui-heading--" + headingClass} {...props}>
      {props.title}
    </span>
  );
};
