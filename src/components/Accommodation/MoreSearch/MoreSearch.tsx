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

export const MoreSearch = (props: any) => {
  return (
    <div className="finder-without-image-container">
      <div className="title-without-image-container">
        <h1 className="title-without-image">{props.title}</h1>
      </div>
      <div className="more-content-container">
        <div className="search-container">
          <div className="search-container-column-left">
            <div className="select-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">{props.bathroom_title}</h1>
              </div>
              <div className="radio">
                <input
                  className="radio-input"
                  type="radio"
                  value="En Suite"
                  name="radio"
                  id="radio"
                />
                <label className="radio-label">En Suite</label>
                <input
                  className="radio-input"
                  type="radio"
                  value="Shared Bathroom"
                  name="radio"
                  id="radio"
                />
                <label className="radio-label">Shared Bathroom</label>
              </div>
            </div>
            <div className="dropdown-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">{props.location_title}</h1>
              </div>
              <label>
                <Select
                  className="dropdown-without-image"
                  options={props.locations}
                  placeholder={props.placeholder}
                  styles={customStyles}
                  aria-label="dropdown"
                />
              </label>
            </div>
            <div className="dropdown-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">{props.resident_title}</h1>
              </div>
              <label>
                <Select
                  className="dropdown-without-image"
                  options={props.residents}
                  placeholder={props.placeholder}
                  styles={customStyles}
                  aria-label="dropdown"
                />
              </label>
            </div>
            <div className="select-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">
                  {props.price_title}{" "}
                  <div className="tooltip">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-question-circle"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />{" "}
                    </svg>
                    <span className="tooltiptext">{props.tooltip}</span>
                  </div>
                </h1>
              </div>
              <div className="radio">
                <input className="radio-input" type="radio" value="£" name="radio" id="radio" />
                <label className="radio-label">£</label>
                <input className="radio-input" type="radio" value="££" name="radio" id="radio" />
                <label className="radio-label">££</label>
                <input className="radio-input" type="radio" value="£££" name="radio" id="radio" />
                <label className="radio-label">£££</label>
                <input className="radio-input" type="radio" value="All" name="radio" id="radio" />
                <label className="radio-label">All</label>
              </div>
            </div>
          </div>
          <div className="search-container-column-right">
            <div className="select-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">
                  {props.shared_title}{" "}
                  <div className="tooltip">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-question-circle"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />{" "}
                    </svg>
                    <span className="tooltiptext">{props.tooltip}</span>
                  </div>
                </h1>
              </div>
              <div className="radio">
                <input
                  className="radio-input"
                  type="radio"
                  value="Tes, Twin"
                  name="radio"
                  id="radio"
                />
                <label className="radio-label">Yes, Twin</label>
                <input
                  className="radio-input"
                  type="radio"
                  value="Yes, Bunk"
                  name="radio"
                  id="radio"
                />
                <label className="radio-label">Yes, Bunk</label>
                <input className="radio-input" type="radio" value="No" name="radio" id="radio" />
                <label className="radio-label">No</label>
              </div>
            </div>
            <div className="select-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">
                  {props.study_title}{" "}
                  <div className="tooltip">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-question-circle"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />{" "}
                    </svg>
                    <span className="tooltiptext">{props.tooltip}</span>
                  </div>
                </h1>
              </div>
              <div className="radio">
                <input
                  className="radio-input"
                  type="radio"
                  value="Undergraduate"
                  name="radio"
                  id="radio"
                />
                <label className="radio-label">Undergraduate</label>
                <input
                  className="radio-input"
                  type="radio"
                  value="Postgraduate"
                  name="radio"
                  id="radio"
                />
                <label className="radio-label">Postgraduate</label>
              </div>
            </div>
            <div className="select-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">
                  {props.family_title}{" "}
                  <div className="tooltip">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-question-circle"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
                      <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />{" "}
                    </svg>
                    <span className="tooltiptext">{props.tooltip}</span>
                  </div>
                </h1>
              </div>
              <div className="radio">
                <input className="radio-input" type="radio" value="Yes" name="radio" id="radio" />
                <label className="radio-label">Yes</label>
                <input className="radio-input" type="radio" value="No" name="radio" id="radio" />
                <label className="radio-label">No</label>
              </div>
            </div>
            <div className="select-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">{props.bed_title}</h1>
              </div>
              <div className="radio">
                <input
                  className="radio-input"
                  type="radio"
                  value="Double"
                  name="radio"
                  id="radio"
                />
                <label className="radio-label">Double</label>
                <input
                  className="radio-input"
                  type="radio"
                  value="Single"
                  name="radio"
                  id="radio"
                />
                <label className="radio-label">Single</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="without-image-button-container">
            <Button
              className="without-image-search-button"
              variant="primary"
              children="Update"
            ></Button>
          </div>
          <div className="without-image-button-container">
            <a type="button" className="without-image-more-button">
              Less options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
