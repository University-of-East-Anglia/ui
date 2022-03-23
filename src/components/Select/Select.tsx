import React, { Component } from "react";
import "./Select.scss";

export interface Props {
    title: string;
    defaultValue: OptionObject | any;
    options: OptionObject[];
}

interface OptionObject {
    value: string;
    label: string;
}

interface ComponentState {
    value: string;
}

export class Select extends Component<Props, ComponentState> {
    state: ComponentState = {
        value: this.props.defaultValue,
    };

    render() {
        console.log(this.state.value);
        return (
            <div className="select">
                <label className="select--label">
                    <span className="select--label-title">{this.props.title}</span>
                    <select
                        className="select--list"
                        onChange={(e) => this.setState({ value: e.target.value })}
                    >
                        {this.props.options.map((option, index: number) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
        );
    }
}
