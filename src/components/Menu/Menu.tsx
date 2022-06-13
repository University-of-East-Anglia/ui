import React, { Component } from "react";
import "./Menu.scss";

export interface Props {
  navItemArray: navObj[];
  navLinkArray: linkObj[];
  utilityItemArray: linkObj[];
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

export interface ComponentState {
  menuActive: boolean;
}

export class Menu extends Component<Props, ComponentState> {
  state: ComponentState = {
    menuActive: false,
  };

  render() {
    const menuState = () => {
      this.state.menuActive
        ? this.setState({ menuActive: false })
        : this.setState({ menuActive: true });
    };
    const toggleSubmenu = (e: any) => {
      console.log(e.target.childNodes);
      e.preventDefault();
      if (e.target.classList.contains("oc-submenu-trigger")) {
        console.log(e.target.nextSibling);
        if (!e.target.nextSibling.classList.contains("open")) {
          e.target.nextSibling.classList.add("open");
          e.target.lastChild.classList.add("open-icon");
        } else {
          e.target.nextSibling.classList.remove("open");
          e.target.lastChild.classList.remove("open-icon");
        }
      } else if (e.target.classList.contains("menu-chevron")) {
        if (!e.target.parentElement.parentElement.nextSibling.classList.contains("open")) {
          e.target.parentElement.parentElement.nextSibling.classList.add("open");
          e.target.parentElement.parentElement.lastChild.classList.add("open-icon");
        } else {
          e.target.parentElement.parentElement.nextSibling.classList.remove("open");
          e.target.parentElement.parentElement.lastChild.classList.remove("open-icon");
        }
      } else {
        if (!e.target.parentElement.nextSibling.classList.contains("open")) {
          e.target.parentElement.nextSibling.classList.add("open");
          e.target.parentElement.lastChild.classList.add("open-icon");
        } else {
          e.target.parentElement.nextSibling.classList.remove("open");
          e.target.parentElement.lastChild.classList.remove("open-icon");
        }
      }
    };

    const menuActive = this.state.menuActive === false ? "" : " open";
    
    console.log(this.props.utilityItemArray);
    
    return (
      <nav className="oc-main">
        <button onClick={menuState} className="" title="Open Menu">
          Menu
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className={"oc-menu-container" + menuActive}>

          <ul className="oc-utility-menu" role="menu">
            {this.props.utilityItemArray.map((item) => (
              <li key={item.uuid} className="oc-utility-item" role="none">
                <a
                    className=""
                    href={item.content.url}
                    role="menuitem"
                  >
                    <span className="utility-item-title">
                      {item.content.title}
                    </span>
                  </a>
              </li>
            ))}
          </ul>

          <button onClick={menuState} className="close-menu" title="Close Menu">
            <span className="sr-only">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <form className="oc-search" action="https://www.uea.ac.uk/search" method="get">
            <div className="oc-search-input-cont">
              <input
                className="oc-search-input"
                name="query"
                placeholder="Search"
                title="Search"
                type="text"
              />
              <button title="Search" className="oc-search-button" type="submit">
                <span id="jbfs__null__null">
                  <svg
                    className="oc-search-icon"
                    focusable="false"
                    role="presentation"
                    viewBox="0 0 512 512"
                  >
                    <path d="M503.254 467.861l-133.645-133.645c27.671-35.13 44.344-79.327 44.344-127.415 0-113.784-92.578-206.362-206.362-206.362s-206.362 92.578-206.362 206.362 92.578 206.362 206.362 206.362c47.268 0 90.735-16.146 125.572-42.969l133.851 133.851c5.002 5.002 11.554 7.488 18.106 7.488s13.104-2.486 18.106-7.488c10.004-10.003 10.004-26.209 0.029-36.183zM52.446 206.801c0-85.558 69.616-155.173 155.173-155.173s155.174 69.616 155.174 155.173-69.616 155.173-155.173 155.173-155.173-69.616-155.173-155.173z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </form>
          <ul className={"oc-menu"} role="menu">
            {this.props.navItemArray.map((item) =>
              item.component === "navItem" ? (
                <li key={item._uid} className="oc-menu-item" role="none">
                  <a
                    className=""
                    href={this.props.navLinkArray.find((x) => x.uuid === item.navItem)?.content.url}
                    role="menuitem"
                  >
                    <span className="menu-item-title">
                      {this.props.navLinkArray.find((x) => x.uuid === item.navItem)?.content.title}
                    </span>
                  </a>
                </li>
              ) : (
                <li key={item._uid} className="oc-menu-item oc-menu-group-container" role="none">
                  <a
                    href="#"
                    role="menuitem"
                    className="oc-submenu-trigger"
                    onClick={toggleSubmenu}
                  >
                    <span className="menu-item-title">{item.title}</span>
                    <svg
                      id="arrow-icon"
                      className="svg-inline--fa fa-angle-down fa-w-10 canvas_menu_group_item__icon fa-fw"
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="angle-down"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        className="menu-chevron"
                        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                      ></path>
                    </svg>
                  </a>

                  <ul className="oc-menu-group oc-menu-group--tier1" role="menu">
                    {item.navBlok?.map((item) =>
                      item.component === "navItem" ? (
                        <li key={item._uid} className="oc-menu-item" role="none">
                          <a
                            className=""
                            href={
                              "https://www.uea.ac.uk" +
                              this.props.navLinkArray.find((x) => x.uuid === item.navItem)?.content
                                .url
                            }
                            role="menuitem"
                          >
                            <span className="menu-item-title">
                              {
                                this.props.navLinkArray.find((x) => x.uuid === item.navItem)
                                  ?.content.title
                              }
                            </span>
                          </a>
                        </li>
                      ) : (
                        <li
                          key={item._uid}
                          className="oc-menu-item oc-menu-group-container"
                          role="none"
                        >
                          <a
                            href="#"
                            role="menuitem"
                            className="oc-submenu-trigger"
                            onClick={toggleSubmenu}
                          >
                            <span className="menu-item-title">{item.title}</span>
                            <svg
                              id="arrow-icon"
                              className="svg-inline--fa fa-angle-down fa-w-10 canvas_menu_group_item__icon fa-fw"
                              aria-hidden="true"
                              data-prefix="fas"
                              data-icon="angle-down"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 320 512"
                              data-fa-i2svg=""
                            >
                              <path
                                fill="currentColor"
                                className="menu-chevron"
                                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                              ></path>
                            </svg>
                          </a>
                          <ul className="oc-menu-group oc-menu-group--tier2" role="menu">
                            {item.navBlok?.map((item) =>
                              item.component === "navItem" ? (
                                <li key={item._uid} className="oc-menu-item" role="none">
                                  <a
                                    className=""
                                    href={
                                      "https://www.uea.ac.uk" +
                                      this.props.navLinkArray.find((x) => x.uuid === item.navItem)
                                        ?.content.url
                                    }
                                    role="menuitem"
                                  >
                                    <span className="menu-item-title">
                                      {
                                        this.props.navLinkArray.find((x) => x.uuid === item.navItem)
                                          ?.content.title
                                      }
                                    </span>
                                  </a>
                                </li>
                              ) : (
                                <li
                                  key={item._uid}
                                  className="oc-menu-item oc-menu-group-container"
                                  role="none"
                                >
                                  <a
                                    href="#"
                                    role="menuitem"
                                    className="oc-submenu-trigger"
                                    onClick={toggleSubmenu}
                                  >
                                    <span className="menu-item-title">{item.title}</span>
                                    <svg
                                      id="arrow-icon"
                                      className="svg-inline--fa fa-angle-down fa-w-10 canvas_menu_group_item__icon fa-fw"
                                      aria-hidden="true"
                                      data-prefix="fas"
                                      data-icon="angle-down"
                                      role="img"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 320 512"
                                      data-fa-i2svg=""
                                    >
                                      <path
                                        fill="currentColor"
                                        className="menu-chevron"
                                        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                                      ></path>
                                    </svg>
                                  </a>
                                  <ul className="oc-menu-group oc-menu-group--tier3" role="menu">
                                    {item.navBlok?.map((item) => (
                                      <li key={item._uid} className="oc-menu-item" role="none">
                                        <a
                                          className=""
                                          href={
                                            "https://www.uea.ac.uk" +
                                            this.props.navLinkArray.find(
                                              (x) => x.uuid === item.navItem
                                            )?.content.url
                                          }
                                          role="menuitem"
                                        >
                                          <span className="menu-item-title">
                                            {
                                              this.props.navLinkArray.find(
                                                (x) => x.uuid === item.navItem
                                              )?.content.title
                                            }
                                          </span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              )
                            )}
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
