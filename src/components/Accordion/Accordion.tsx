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
    active: number;
}

export class Accordion extends Component<Props, ComponentState> {
    state: ComponentState = {
        active: 0,
    };

    render() {
        return (
            <div className="accordion">
                {this.props.accordion.map((pane: any, index) => (
                    <div key={index}>
                        <div
                            id={"accordion-title" + index}
                            className={
                                this.state.active === index
                                    ? "accordion--header accordion--header-open"
                                    : "accordion--header"
                            }
                            role="button"
                            onClick={() => this.setState({ active: index })}
                        >
                            {pane.title}
                        </div>

                        <div
                            id={"accordion-content" + index}
                            role="region"
                            aria-labelledby={"accordion-title" + index}
                            className={
                                this.state.active === index
                                    ? "accordion--panel-open"
                                    : "accordion--panel"
                            }
                        >
                            {pane.content}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
