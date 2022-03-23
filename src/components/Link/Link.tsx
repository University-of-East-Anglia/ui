import React, { Component } from "react";

interface ComponentProps {}

interface ComponentState {}

export class Link extends Component<ComponentProps, ComponentState> {
    state: ComponentState = {};

    render() {
        return <div>Link</div>;
    }
}
