import React, { Component } from "react";
import "../CTA.scss";

export interface Props {
    title?: string;
    content?: string;
    anchor: string;
    link: string;
    image: string;
    bgcolour?: "pink" | "blue";
}

export class CTAWithImage extends Component<Props> {
    render() {
        return (
            <div
                className="cta cta-card cta-card-image"
                style={{ backgroundImage: "url(" + this.props.image + ")" }}
            >
                {this.props.title ? (
                    <p className={"cta-title " + this.props.bgcolour}>{this.props.title}</p>
                ) : null}
                {this.props.content ? (
                    <p className={"cta-content " + this.props.bgcolour}>{this.props.content}</p>
                ) : null}
                <div>
                    <a className={"cta-link " + this.props.bgcolour} href={this.props.link}>
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
            </div>
        );
    }
}
