import React, { Component } from "react";
import "../CTA.scss";

export interface Props {
  title: string;
  link: string;
  reverse?: boolean;
}

interface ComponentState {}

export class CTA extends Component<Props, ComponentState> {
  state: ComponentState = {};

  render() {
    const colorClass = this.props.reverse != true ? "-reverse" : "-pink";
    return (
      <a className={"cta cta-default cta-default" + colorClass} href={this.props.link}>
        {this.props.title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cta-chevron--right"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    );
  }
}
