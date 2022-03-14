import React, { Component } from "react";

export interface Props {
  title: string;
  link: string;
  reverse?: boolean;
}

interface ComponentState {}

export class CTA extends Component<Props, ComponentState> {
  state: ComponentState = {};

  render() {
    const linkClass =
      "flex items-center justify-between border-2 px-2 py-1 rounded-lg text-bold border-pink w-full max-w-xs" +
      " ";
    const colorClass = this.props.reverse != true ? "bg-pink" : "bg-gray-dark text-white";
    return (
      <a className={linkClass + colorClass}>
        {this.props.title}
        <span>{">"}</span>
      </a>
    );
  }
}
