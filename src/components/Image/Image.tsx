import React, { Component } from "react";
import "./Image.scss";

export interface ComponentProps {
  className: string;
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

interface ComponentState {}

export class Image extends Component<ComponentProps, ComponentState> {
  state: ComponentState = {};

  render() {
    return (
        <img
          className={this.props.className}
          src={this.props.src}
          alt={this.props.alt}
          height={this.props.height}
          width={this.props.width}
        />
    );
  }
}
