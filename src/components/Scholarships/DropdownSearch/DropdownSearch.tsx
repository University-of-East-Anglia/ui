import React, { useState } from "react";
import Select from "react-select";
import "./DropdownSearch.scss";
import { Button } from "../../Button";

const customStyles = {
  control: (base: any) => ({
    ...base,
    height: 69,
    minHeight: 69,
    maxWidth: 1196,
    minWidth: 300,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "2px solid rgba(242, 242, 242, 1)",
    borderRadius: 6,
  }),
};

export const DropdownSearch = (props: any) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [textHidden, setTextHidden] = useState(true);
  const getData = () => {
    setTextHidden(false);
  };
  const onChange = () => {};
  return (
    <div className="dropdown">
      <h1 className="ui-dropdown-search scholarships-title">{props.page_title}</h1>
      <div className="dropdown-items-container">
        <div className="dropdown-item">
          <label>
            <Select
              className="ui-dropdown-search dropdown-container"
              options={props.degrees}
              onChange={onChange}
              placeholder={props.degrees_placeholder}
              styles={customStyles}
              aria-label="dropdown"
            />
          </label>
        </div>
        <div className="dropdown-item">
          <label>
            <Select
              className="ui-dropdown-search dropdown-container"
              options={props.options}
              onChange={onChange}
              placeholder={props.placeholder}
              styles={customStyles}
              isDisabled={isDisabled}
              aria-label="dropdown"
            />
          </label>
        </div>
      </div>
      <div className="dropdown-items-container">
        <div className="dropdown-item">
          <label>
            <Select
              className="ui-dropdown-search dropdown-container"
              options={props.options}
              onChange={onChange}
              placeholder={props.placeholder}
              styles={customStyles}
              aria-label="dropdown"
            />
          </label>
        </div>
        <div className="dropdown-item">
          <label>
            <Select
              className="ui-dropdown-search dropdown-container"
              options={props.nationalities}
              onChange={onChange}
              placeholder={props.nationality_placeholder}
              styles={customStyles}
              aria-label="dropdown"
            />
          </label>
        </div>
      </div>
      <div className="dropdown-items-container">
        <div className="dropdown-item">
          <label>
            <Select
              className="ui-dropdown-search dropdown-container"
              options={props.options}
              onChange={onChange}
              placeholder={props.placeholder}
              styles={customStyles}
              isDisabled={isDisabled}
              aria-label="dropdown"
            />
          </label>
        </div>
        <div className="dropdown-item">
          <label>
            <Select
              className="ui-dropdown-search dropdown-container"
              options={props.years}
              onChange={onChange}
              placeholder={props.year_placeholder}
              styles={customStyles}
              aria-label="dropdown"
            />
          </label>
        </div>
      </div>
      <div className="button-container">
        <Button
          className="update-button"
          variant="primary"
          children="Search"
          onClick={getData}
        ></Button>
      </div>
      <div className="warning-text-container">
        <p className="warning-text" hidden={textHidden}>
          No results to show, search again?
        </p>
      </div>
    </div>
  );
};
