import React, { Component } from "react";
import "./Tabs.scss";

export interface Props {
  tabs: TabContent[];
  select_title: string;
}

export interface TabContent {
  title: string;
  content: string;
}

interface ComponentState {
  active: number;
  isSmallScreen: boolean;
}

export class Tabs extends Component<Props, ComponentState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      active: 0,
      isSmallScreen: false,
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const screenWidth = window.innerWidth;
    const tabWidth = document.getElementById("tabContainer");
    const breakpoint = tabWidth?.offsetWidth || 600;
    this.setState({
      isSmallScreen: screenWidth <= breakpoint,
    });
  };

  render() {
    const { tabs, select_title } = this.props;
    const { active, isSmallScreen } = this.state;

    const tabButtons = tabs.map((panel: TabContent, index: number) => (
      <button
        type="button"
        role="tab"
        aria-selected={index === active}
        aria-controls={"tab-" + index}
        key={index}
        id={"tab" + index}
        onClick={() => this.setState({ active: index })}
        className={active === index ? "tab tab--active" : "tab"}
      >
        {panel.title}
      </button>
    ));

    const tabPanels = tabs.map((panel: TabContent, index: number) => (
      <div
        key={index}
        role="tabpanel"
        id={"tab-" + index}
        aria-labelledby={"tab" + index}
        className={active === index ? "tab tab-panel--active" : "tab-panel"}
      >
        {panel.content}
      </div>
    ));

    if (isSmallScreen === false) {
      return (
        <div className="tabs">
          <div id="tabContainer" className="tablist" role="tablist">
            {tabButtons}
            <div className="tablist-base"></div>
          </div>
          {tabPanels}
        </div>
      );
    } else {
      return (
        <>
          <div className="simple-select">
            <label className="select-label">
              <span className="select-label--title">{select_title}</span>
              <select
                className="select-list"
                onChange={(e: any) => this.setState({ active: e.target.value })}
              >
                {tabs.map((option, index) => (
                  <option key={index} value={index}>
                    {option.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
          {tabs.map((option, index) => (
            <div key={index} style={{ display: index !== active ? "none" : "block" }}>
              {option.content}
            </div>
          ))}
        </>
      );
    }
  }
}
