import React, { Component } from "react";

interface ComponentProps {}

interface ComponentState {}

export class BlockQuote extends Component<ComponentProps, ComponentState> {
    state: ComponentState = {};

    render() {
        return <div>Blockquote</div>;
    }
}
