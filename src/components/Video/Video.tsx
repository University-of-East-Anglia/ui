import React, { Component } from "react";
import "./Video.scss";

export interface ComponentProps {
  videoUrl: string | string[];
  controls: boolean;
}

interface ComponentState {}

export class Video extends Component<ComponentProps, ComponentState> {
  state: ComponentState = {};

  render() {
    return <div className="video"></div>;
  }
}
