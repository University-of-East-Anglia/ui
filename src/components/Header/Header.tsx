import React, { Component } from "react";

export interface Props {}

interface ComponentState {}

export class Header extends Component<Props, ComponentState> {
    state: ComponentState = {};

    render() {
        return <div>Header</div>;
    }
}
