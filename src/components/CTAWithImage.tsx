import React, { Component } from "react";

export interface Props {
  title: string;
  content?: string;
  anchor: string;
  link: string;
  image: string;
  bgcolour?: string;
}

interface ComponentState {}

export class CTAWithImage extends Component<Props, ComponentState> {
  state: ComponentState = {};

  render() {
    const bg = this.props.bgcolour != null ? this.props.bgcolour : "bg-blue";
    console.log(bg);
    return (
      <div
        className="flex flex-col items-center justify-center p-4 bg-center bg-cover rounded-lg"
        style={{ backgroundImage: "url(" + this.props.image + ")" }}
      >
        <h2 className={"inline-block p-2 mb-4 text-2xl font-bold rounded-lg " + bg}>
          {this.props.title}
        </h2>
        {this.props.content ? (
          <p className={"flex-1 inline-block p-2 mb-4 rounded-lg " + bg}>{this.props.content}</p>
        ) : null}
        <a className={"inline-block p-2 underline rounded-lg " + bg} href={this.props.link}>
          {this.props.anchor}
        </a>
      </div>
    );
  }
}
