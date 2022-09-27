import React, { useState } from "react";
import Select from "react-select";
import "./DropdownSearch.scss";

const customStyles = {
  control: (base: any) => ({
    ...base,
    height: 69,
    minHeight: 69,
    maxWidth: 557,
    minWidth: 300,
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "2px solid rgba(242, 242, 242, 1)",
    borderRadius: 6,
  }),
};

export const DropdownSearch = (props: any) => {
  const onChange = () => {};
  return (
    <div>
      <h1 className="ui-dropdown-search scholarships-title">{props.page_title}</h1>
      <div>
        <label>
          <Select
            className="ui-dropdown-search dropdown-container"
            options={props.options}
            onChange={onChange}
            placeholder={props.placeholder}
            styles={customStyles}
          />
        </label>
      </div>
    </div>
  );
};
