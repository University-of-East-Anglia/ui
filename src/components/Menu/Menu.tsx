import React, { Component } from "react";
import "./Menu.scss";

export interface ComponentProps {}

interface navObj {
  full_slug: string;
  group_id: string;
  id: string;
  is_startpage: boolean;
  name: string;
  parent_id: number;
  path: string;
  position: number;
  slug: string;
  uuid: string;
}

export interface ComponentState {
  navItems: navObj[];
  menuActive: boolean;
}

export class Menu extends Component<ComponentProps, ComponentState> {
  state: ComponentState = {
    navItems: [],
    menuActive: false,
  };

  getMenuItems = () => {
    fetch(
      "https://api.storyblok.com/v1/cdn/stories?version=published&resolve_relations=global_reference.reference&token=t5eDfqfC1nBLNDnSXKc4bgtt",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ navItems: data.stories });
      });
  };

  componentDidMount() {
    this.getMenuItems();
  }
  render() {
    console.log(this.state.navItems);
    const menuState = () => {
      this.state.menuActive
        ? this.setState({ menuActive: false })
        : this.setState({ menuActive: true });
    };
    return (
      <nav className="menu-primary">
        <button onClick={menuState} className={this.state.menuActive ? "active" : ""}>
          Menu
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <ul className={this.state.menuActive ? "active" : ""}>
          {this.state.navItems.map((item) => (
            <li>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
