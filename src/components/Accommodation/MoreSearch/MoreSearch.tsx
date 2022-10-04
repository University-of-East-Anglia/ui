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
              <form>
                <label>
                  <input type="button" value="En Suite" className="ensuite-without-image"></input>
                </label>
                <label>
                  <input
                    type="button"
                    value="Shared Bathroom"
                    className="shared-without-image"
                  ></input>
                </label>
              </form>
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
                <h1 className="smalltitle-without-image">{props.price_title}</h1>
              </div>
              <form>
                <label>
                  <input type="button" value="£" className="cheap"></input>
                </label>
                <label>
                  <input type="button" value="££" className="average"></input>
                </label>
                <label>
                  <input type="button" value="£££" className="expensive"></input>
                </label>
                <label>
                  <input type="button" value="All" className="all"></input>
                </label>
              </form>
            </div>
          </div>
          <div className="search-container-column-right">
            <div className="select-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">{props.shared_title}</h1>
              </div>
              <form>
                <label>
                  <input type="button" value="Yes, Twin" className="twin"></input>
                </label>
                <label>
                  <input type="button" value="Yes, Bunk" className="bunk"></input>
                </label>
                <label>
                  <input type="button" value="No" className="reject"></input>
                </label>
              </form>
            </div>
            <div className="select-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">{props.study_title}</h1>
              </div>
              <form>
                <label>
                  <input
                    type="button"
                    value="Undergraduate"
                    className="ensuite-without-image"
                  ></input>
                </label>
                <label>
                  <input
                    type="button"
                    value="Postgraduate"
                    className="shared-without-image"
                  ></input>
                </label>
              </form>
            </div>
            <div className="select-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">{props.family_title}</h1>
              </div>
              <form>
                <label>
                  <input type="button" value="Yes" className="ensuite-without-image"></input>
                </label>
                <label>
                  <input type="button" value="No" className="shared-without-image"></input>
                </label>
              </form>
            </div>
            <div className="select-container-without-image">
              <div className="smalltitle-without-image-container">
                <h1 className="smalltitle-without-image">{props.bed_title}</h1>
              </div>
              <form>
                <label>
                  <input type="button" value="Double" className="ensuite-without-image"></input>
                </label>
                <label>
                  <input type="button" value="Single" className="shared-without-image"></input>
                </label>
              </form>
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
