import React, { useState, useEffect } from "react";
import "./Tabs.scss";

export interface Props {
  tabs: TabContent[];
  select_title: string;
}

export interface TabContent {
  title: string;
  content: string;
}

const Tabs: React.FC<Props> = ({ tabs, select_title }) => {
  const [active, setActive] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth: number = window.innerWidth;
      const tabWidth = document.getElementById("tabContainer");
      const breakpoint = tabWidth?.offsetWidth || 600;
      setIsSmallScreen(screenWidth <= breakpoint);
      console.log(screenWidth - breakpoint);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const tabButtons = tabs.map((panel: TabContent, index: number) => (
    <button
      type="button"
      role="tab"
      aria-selected={index === active}
      aria-controls={"tab-" + index}
      key={index}
      id={"tab" + index}
      onClick={() => setActive(index)}
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
      <div>
        <div className="simple-select">
          <label className="select-label">
            <span className="select-label--title">{select_title}</span>
            <select className="select-list" onChange={(e: any) => setActive(e.target.value)}>
              {tabs.map((option, index) => (
                <option key={index} value={index}>
                  {option.title}
                </option>
              ))}
            </select>
          </label>
        </div>
        {tabs.map((option, index) => (
          <div key={index} style={{ display: index != active ? "none" : "block" }}>
            {option.content}
          </div>
        ))}
      </div>
    );
  }
};

export default Tabs;
