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
    active: string;
}

export class SidebarNav extends Component<ComponentProps, ComponentState> {
    state: ComponentState = {
        active: "",
    };

    render() {
        return (
            <div className="sidebar">
                <nav>
                    <ul>
                        {this.props.navItems.map((item) => (
                            <li>
                                <a href={item.url}>{item.anchor}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }
}
