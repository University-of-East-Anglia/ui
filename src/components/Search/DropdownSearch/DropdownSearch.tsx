import React, { useEffect, useState } from "react";
import "./DropdownSearch.scss";

export interface Props {
  options: Options[];
}

export interface Options {
  value: string;
  label: string;
}

export const DropdownSearch = (props: any) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const handler = () => setShowOptions(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleInputClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setShowOptions(!showOptions);
  };

  const getDisplay = () => {
    if (selectedOption) {
      return selectedOption.label;
    }
    return props.placeholder;
  };

  const onItemClick = (option: React.SetStateAction<null>) => {
    setSelectedOption(option);
  };

  const isSelected = (option: {
    value: any;
    label?: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
  }) => {
    if (!selectedOption) {
      return false;
    }
    return selectedOption.value === option.value;
  };

  return (
    <div>
      <div>
        <p className="scholarships-title">{props.page_title}</p>
      </div>
      <div className="dropdown-container">
        <div onClick={handleInputClick} className="dropdown-input">
          {showOptions && (
            <div className="dropdown-menu">
              {props.options.map(
                (option: {
                  value: React.Key | null | undefined;
                  label:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => (
                  <div className="dropdown-item">
                    <div
                      onClick={() => onItemClick(option)}
                      key={option.value}
                      className={`dropdown-item${isSelected(option) && "selected"}`}
                    >
                      {option.label}
                    </div>
                  </div>
                )
              )}
            </div>
          )}

          <div className="dropdown-selected-value" contentEditable={true}>
            {getDisplay()}
          </div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <svg height="20" width="20" viewBox="0 0 20 20">
                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
