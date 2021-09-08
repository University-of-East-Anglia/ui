import React from "react";
import "./styles.css";

export interface Props {
  children: string;
  size?: "medium" | "large" | "x-large" | "xx-large";
}

export const Header = ({ children, ...props }: Props) => {
  let headerClass: string = "font-bold mb-4";
  var size: string;
  switch (props.size) {
    case "medium":
      var size = "text-xl";
      break;
    case "large":
      var size = "text-2xl";
      break;
    case "x-large":
      var size = "text-4xl";
      break;
    case "xx-large":
      var size = "text-7xl";
      break;
    default:
      var size = "text-lg";
  }
  return (
    <h1 className={headerClass + " " + size} {...props}>
      {children}
    </h1>
  );
};
