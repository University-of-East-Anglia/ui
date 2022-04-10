import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Video.scss";

export interface ComponentProps {
  videoUrl: string | string[];
  controls: boolean;
}

interface ComponentState {}

export class Video extends Component<ComponentProps, ComponentState> {
  state: ComponentState = {};

  render() {
    return (
      <div className="video">
        <ReactPlayer url={this.props.videoUrl} controls={this.props.controls} />
      </div>
    );
  }
}
