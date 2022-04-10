import React, { Component } from "react";
import "./Image.scss";

export interface ComponentProps {
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
      <div className="image">
        <img
          src={this.props.src}
          alt={this.props.alt}
          height={this.props.height}
          width={this.props.width}
        />
      </div>
    );
  }
}
