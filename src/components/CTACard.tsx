import React, { Component } from "react";

export interface Props {
  title: string;
  content: string;
  anchor: string;
  link: string;
}

interface ComponentState {}

export class CTACard extends Component<Props, ComponentState> {
  state: ComponentState = {};

  render() {
    return (
      <div className="flex flex-col min-h-full p-4 text-black rounded-lg bg-pink">
        <h2 className="mb-4 text-2xl font-bold">{this.props.title}</h2>
        <p className="flex-1 mb-4">{this.props.content}</p>
        <a className="block underline" href={this.props.link}>
          {this.props.anchor} {">"}
        </a>
      </div>
    );
  }
}
