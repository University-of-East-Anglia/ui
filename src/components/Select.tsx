import React, { Component } from "react";

export interface Props {
  title: string;
  defaultValue: OptionObject | any;
  options: OptionObject[];
}

interface OptionObject {
  value: string;
  label: string;
}

interface ComponentState {
  value: string;
}

export class Select extends Component<Props, ComponentState> {
  state: ComponentState = {
    value: this.props.defaultValue,
  };

  render() {
    console.log(this.state.value);
    return (
      <label className="grid items-center h-12 max-w-lg grid-cols-2 bg-white divide-x-2 rounded-lg divide-blue">
        <span className="px-4">{this.props.title}</span>
        <select
          className="items-center h-full px-4 rounded-r-lg focus:ring-blue"
          onChange={(e) => this.setState({ value: e.target.value })}
        >
          {this.props.options.map((option, index: number) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
