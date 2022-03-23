import React, { Component } from "react";

export interface Props {
    content: string;
}

export class Textarea extends Component<Props> {
    render() {
        return (
            <div>
                <p>{this.props.content}</p>
            </div>
        );
    }
}
