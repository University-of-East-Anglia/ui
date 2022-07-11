import React, { Component } from "react";
import "./SidebarNav.scss";

export interface ComponentProps {
  navItems: navObj[];
}

interface navObj {
  anchor: string;
  url: string;
}
interface ComponentState {
  active: boolean;
}

export class SidebarNav extends Component<ComponentProps, ComponentState> {
  state: ComponentState = {
    active: false,
  };

  render() {
    const setMenuState = () => {
      this.state.active ? this.setState({ active: false }) : this.setState({ active: true });
    };
    const isActive = this.state.active === true ? "open" : null;
    return (
      <div className="sidebar">
        <nav>
          <button className="toggle-menu" onClick={setMenuState}>
            Menu
          </button>
          <ul className={"sidebar-menu " + isActive}>
            {this.props.navItems.map((item) => (
              <li className="sidebar-menu-items">
                <a href={item.url} onClick={setMenuState}>
                  {item.anchor}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
