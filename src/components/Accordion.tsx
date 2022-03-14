import React, { Component } from "react";

export interface Props {
  accordion: AccordionContent[];
}

export interface AccordionContent {
  title: string;
  content: string;
}

interface ComponentState {
  active: number;
}

export class Accordion extends Component<Props, ComponentState> {
  state: ComponentState = {
    active: 0,
  };

  render() {
    const panelClass = "px-4 pt-2 pb-4";
    return (
      <div>
        {this.props.accordion.map((pane: any, index) => (
          <div key={index}>
            <div
              id={"accordion-title" + index}
              className="p-4 font-bold border-b-2 border-blue"
              role="button"
              onClick={() => this.setState({ active: index })}
            >
              {pane.title}
            </div>

            <div
              id={"accordion-content" + index}
              role="region"
              aria-labelledby={"accordion-title" + index}
              className={this.state.active === index ? panelClass + " block" : "hidden"}
            >
              {pane.content}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
