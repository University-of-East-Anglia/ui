import React from "react";
import Select from "react-select";
import "../RoomSearch.scss";
import { Button } from "../../Button";

const customStyles = {
  control: (base: any) => ({
    ...base,
    height: 69,
    minHeight: 69,
    maxWidth: 1196,
    minWidth: 286,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "1px solid rgba(242, 242, 242, 1)",
    borderRadius: 6,
  }),
};

export const LessWithImage = (props: any) => {
  return (
    <div className="finder-container">
      <div className="image-container">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="searchbar-container">
        <div className="title-container">
          <h1 className="title">{props.title}</h1>
        </div>
        <div className="small-title-container">
          <h1 className="small-title">{props.bathroom_title}</h1>
        </div>
        <div className="radio-with-image">
          <input
            className="radio-input-with-image"
            type="radio"
            value="En Suite"
            name="radio"
            id="radio"
          />
          <label className="radio-label-with-image">En Suite</label>
          <input
            className="radio-input-with-image"
            type="radio"
            value="Shared Bathroom"
            name="radio"
            id="radio"
          />
          <label className="radio-label-with-image">Shared Bathroom</label>
        </div>

        <div className="dropdown-container">
          <div className="small-title-container">
            <h1 className="small-title">{props.location_title}</h1>
          </div>
          <label>
            <Select
              className="dropdown"
              options={props.locations}
              placeholder={props.placeholder}
              styles={customStyles}
              aria-label="dropdown"
            />
          </label>
          <div className="small-title-container">
            <h1 className="small-title">{props.resident_title}</h1>
          </div>
          <label>
            <Select
              className="dropdown"
              options={props.residents}
              placeholder={props.placeholder}
              styles={customStyles}
              aria-label="dropdown"
            />
          </label>
        </div>
        <div className="button-container">
          <Button className="search-button" variant="primary" children="Search"></Button>
        </div>
        <div className="button-container">
          <a type="button" className="more-button">
            More options
          </a>
        </div>
      </div>
    </div>
  );
};
