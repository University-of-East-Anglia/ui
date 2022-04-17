import React, { Component } from "react";
import { DescriptionList } from "../../Lists/DescriptionList";
import "./KeyDetails.scss";

export interface ComponentProps {
  school: string;
  schoolURL: string;
  courseTitle: string;
  keyDetails: DescriptionList[];
}

interface DescriptionList {
  term: string;
  description: string;
}

interface ComponentState {}

export class KeyDetails extends Component<ComponentProps, ComponentState> {
  state: ComponentState = {};

  render() {
    return (
      <div className="key-details">
        <a className="link--back" href={this.props.schoolURL}>
          {this.props.school}
        </a>
        <h1>{this.props.courseTitle}</h1>
        <p className="title--uppercase">Course Options</p>
        <p className="title--uppercase">Key Details</p>
        <DescriptionList listItems={this.props.keyDetails}></DescriptionList>
      </div>
    );
  }
}
