import React, { Component } from "react";
import "../CTA.scss";

export interface Props {
    title: string;
    content: string;
    anchor: string;
    link: string;
}

interface ComponentState {}

export class CTACard extends Component<Props, ComponentState> {
    state: ComponentState = {};

    render() {
        return (
            <div className="cta cta-card">
                <div>
                    <h2 className="cta-title">{this.props.title}</h2>
                    <p className="cta-content">{this.props.content}</p>
                </div>
                <a className="cta-link" href={this.props.link}>
                    {this.props.anchor}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="cta-chevron--right"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        );
    }
}
