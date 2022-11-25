import React, { Component } from "react";
import "./QuickLinks.scss";

export interface Props {
    quickLinksArray: linkObj[];
}

interface linkObj {
    name: string;
    content: {
        title: string;
        url: string;
    };
    uuid: string;
}

export class QuickLinks extends Component<Props> {

    render() {
        return (
            <div className="quicklinks">
                {this.props.quickLinksArray &&
                    <ul className="list--horizontal list--none">
                        {this.props.quickLinksArray.map((item, key) => {
                            return (
                                <a key={key} href={item.content.url}>
                                    <li className="list--listitem">{item.name}</li>
                                </a>
                                
                            )
                        })}
                    </ul>
                }
            </div>
        );
    }
}