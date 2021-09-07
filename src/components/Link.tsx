import React from "react";
import "../App.css";

export interface Props {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  link: string;
  anchor: string;
}

const Link = ({ ...props }: Props) => {
  let linkClass =
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
    <a href={props.link} className={linkClass + " " + size} {...props}>
      {props.anchor}
    </a>
  );
};

export default Link;
