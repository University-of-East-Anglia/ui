import React, { Component } from "react";
import "./Accordion.scss";

export interface Props {
  accordion: AccordionContent[];
}

export interface AccordionContent {
  title: string;
  content: string;
}

interface ComponentState {
  active: number[];
}

export class Accordion extends Component<Props, ComponentState> {
  state: ComponentState = {
    active: [0],
  };

  render() {
    const toggleClass = (e: any) => {
      const headerID = document.getElementById(e.target.id);
      const bodyID = document.getElementById(
        e.target.id.replace("accordion-title", "accordion-content")
      );
      const headerClass: any = "accordion--header-open";
      const bodyClass: any = "accordion--panel-open";

      if (headerID?.classList.contains(headerClass)) {
        headerID.classList.remove(headerClass);
      } else {
        headerID?.classList.add(headerClass);
      }
      if (bodyID?.classList.contains(bodyClass)) {
        bodyID.classList.remove(bodyClass);
      } else {
        bodyID?.classList.add(bodyClass);
      }
    };
    return (
      <div className="accordion">
        {this.props.accordion.map((pane: any, index: number) => {
          const groupID = Math.floor(Math.random() * 99999);
          return (
            <div key={index}>
              <button
                id={"accordion-title--" + groupID + index}
                className="accordion--header"
                onClick={toggleClass}
              >
                {pane.title}
              </button>

              <div
                id={"accordion-content--" + groupID + index}
                role="region"
                aria-labelledby={"accordion-title" + index}
                className="accordion--panel"
              >
                {pane.content}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
