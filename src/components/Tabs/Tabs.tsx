import React, { Component } from "react";
import "./Tabs.scss";

export interface Props {
  tabs: TabContent[];
}

export interface TabContent {
  title: string;
  content: string;
}

interface ComponentState {
  active: number;
}

export class Tabs extends Component<Props, ComponentState> {
  state: ComponentState = {
    active: 0,
  };

  render() {
    return (
      <div className="tabs">
        <div className="tablist" role="tablist">
          {this.props.tabs.map((panel: any, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={index === this.state.active ? true : false}
              aria-controls={"tab-" + index}
              key={index}
              id={"tab" + index}
              onClick={() => this.setState({ active: index })}
              className={this.state.active === index ? "tab tab--active" : "tab"}
            >
              {panel.title}
            </button>
          ))}
          <div className="tablist-base"></div>
        </div>
        {this.props.tabs.map((panel: any, index) => (
          <div
            key={index}
            role="tabpanel"
            id={"tab-" + index}
            aria-labelledby={"tab" + index}
            className={this.state.active === index ? "tab tab-panel--active" : "tab-panel"}
          >
            {panel.content}
          </div>
        ))}
      </div>
    );
  }
}
