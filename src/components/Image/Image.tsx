import React, { Component } from "react";
import "./Image.scss";

export interface ComponentProps {
  className?: string;
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width?: string;
  height?: string;
}

interface ComponentState { }

export class Image extends Component<ComponentProps, ComponentState> {
  state: ComponentState = {};

  render() {
    return (
      <img
        className={this.props.className}
        src={this.props.src}
        srcSet={this.props.srcSet}
        sizes={this.props.sizes}
        alt={this.props.alt}
        height={this.props.height}
        width={this.props.width}
      />
    );
  }
}
