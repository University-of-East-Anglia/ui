import React, { Component } from "react";
import "./Menu.scss";

export interface ComponentProps {}

interface navObj {
  component: string;
  full_slug: string;
  group_id: string;
  id: string;
  is_startpage: boolean;
  title: string;
  parent_id: number;
  url: string;
  position: number;
  slug: string;
  uuid: string;
  navBlok: navObj[];
  navItem: string;
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
    const token = process.env.STORYBOOK_API_TOKEN;
    const apiUrl =
      "https://api.storyblok.com/v2/cdn/stories/molecules/navigation/www/off-canvas-main?version=draft&token=" +
      token +
      "&cv=1651695832";
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ navItems: data.story.content.navItem });
      });
  };

  componentDidMount() {
    this.getMenuItems();
  }
  render() {
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
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ul className={this.state.menuActive ? "active" : ""}>
          {this.state.navItems.map((item, i) => {
            console.log(item);
            if (item.component === "navItem") {
              return (
                <li key={i}>
                  <a href={item.url}>{item.navItem}</a>
                </li>
              );
            } else {
              return (
                <li>
                  <ul>
                    {item.navBlok.map((item, i) => {
                      if (item.component === "navItem") {
                        return (
                          <li key={i}>
                            <a href={item.url}>{item.navItem}</a>
                          </li>
                        );
                      } else {
                        return (
                          <li>
                            <ul>
                              {item.navBlok.map((item, i) =>
                                item.component === "navItem" ? (
                                  <li key={i}>
                                    <a href={item.url}>{item.navItem}</a>
                                  </li>
                                ) : (
                                  <li>
                                    <ul>
                                      {item.navBlok.map((item, i) => (
                                        <li key={i}>
                                          <a href={item.url}>{item.navItem}</a>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                )
                              )}
                            </ul>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    );
  }
}
