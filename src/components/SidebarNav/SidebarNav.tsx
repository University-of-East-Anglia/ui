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
          <button className="toggle-menu" onClick={setMenuState} title="Sidebar Menu">
            {this.state.active === false ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
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
