import React, { Component } from "react";

export interface ComponentProps {
  id: string;
  label: string;
  placeholder: string;
  destination_url?: string;
}

export interface ComponentState {
  value: string;
}

export class Input extends Component<ComponentProps, ComponentState> {
  state: ComponentState = {
    value: "",
  };

  render() {
    return (
      <div className="ui-input">
        {this.props.destination_url ? (
          <form action={this.props.destination_url + this.state.value} method="POST">
            <input
              aria-label={this.props.label}
              title={this.props.label}
              id={this.props.id}
              value={this.state.value}
              placeholder={this.props.placeholder}
              onChange={(e) => this.setState({ value: e.target.value })}
            />
          </form>
        ) : (
          <input
            aria-label={this.props.label}
            title={this.props.label}
            id={this.props.id}
            value={this.state.value}
            placeholder={this.props.placeholder}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        )}
      </div>
    );
  }
}
