import React, { Component } from "react";

interface ComponentProps {}

interface ComponentState {}

export class Input extends Component<ComponentProps, ComponentState> {
    state: ComponentState = {};

    render() {
        return <div>Input</div>;
    }
}
