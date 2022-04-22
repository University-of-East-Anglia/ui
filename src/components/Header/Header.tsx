import React, { Component } from "react";
import { UEALogo } from "../UEALogo";
import { Menu } from "../Menu";
import "./Header.scss";

export interface Props {
  background: "light" | "dark" | "transparent";
}

interface ComponentState {}

export class Header extends Component<Props, ComponentState> {
  state: ComponentState = {};

  render() {
    return (
      <div className={"header-container header-container--" + this.props.background}>
        <header className="header">
          <UEALogo />
          <Menu />
        </header>
      </div>
    );
  }
}
