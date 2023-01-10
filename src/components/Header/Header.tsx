import React, { Component } from "react";
import { UEALogo } from "../Icons/UEALogo";
import { Menu } from "../Menu";
import { QuickLinks } from "./QuickLinks";
import "./Header.scss";

export interface Props {
  background: "light" | "dark" | "transparent";
  navItemArray: navObj[];
  navLinkArray: linkObj[];
  utilityItemArray: linkObj[];
  quickLinksArray: linkObj[];
}

interface navObj {
  _uid?: string;
  component?: string;
  full_slug?: string;
  group_id?: string;
  id?: string;
  is_startpage?: boolean;
  title?: string;
  parent_id?: number;
  url?: string;
  position?: number;
  slug?: string;
  uuid?: string;
  navBlok?: navObj[];
  navItem?: string;
  _editable?: string;
  target?: boolean;
  children?: [];
}

interface linkObj {
  name: string;
  content: {
    title: string;
    url: string;
  };
  uuid: string;
}

interface ComponentState { }

export class Header extends Component<Props, ComponentState> {
  state: ComponentState = {};

  render() {
    return (
      <div className={"header-container header-container--" + this.props.background}>
        <header className="header">
          <UEALogo />
          <div className="quicklinks">
            <QuickLinks quickLinksArray={this.props.quickLinksArray} />
          </div>
          <Menu navItemArray={this.props.navItemArray} navLinkArray={this.props.navLinkArray} utilityItemArray={this.props.utilityItemArray} />
        </header>
      </div>
    );
  }
}