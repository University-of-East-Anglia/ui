import React, { useState } from "react";
import "./UEANumbers.scss";

export interface Props {
  keyvalues: KeyValues[];
  title: string;
}

export interface KeyValues {
  itemtitle: string;
  itemdata: string;
}

export const UEANumbers = ({ ...props }: Props) => {
  const keyvalues = [
    { itemtitle: "4,300", itemdata: "Student rooms" },
    { itemtitle: "£72", itemdata: "To £264 a week in rent" },
    { itemtitle: "8", itemdata: "Minutes average walk time to the library" },
    { itemtitle: "XX", itemdata: "Typical broadband internet speed" },
    { itemtitle: "2 Grade II", itemdata: "Listed accommodation buildings" },
  ];
  const [titleData, setTitleData] = useState(keyvalues[0].itemtitle);
  const [data, setData] = useState(keyvalues[0].itemdata);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    const slidertitle = props.keyvalues[index].itemtitle;
    const slider = props.keyvalues[index].itemdata;
    setData(slider);
    setTitleData(slidertitle);
    setActiveIndex(index);
  };

  return (
    <div className="panel">
      <div className="number-panel">
        <div className="panel-container">
          <div className="title-container">
            <h1 className="title">{props.title}</h1>
          </div>
          <div className="content-container">
            {props.keyvalues.map((value, i) => (
              <div key={i} className="content-item">
                <h1 className="content-title">{value.itemtitle}</h1>
                <hr />
                <p className="content-data">{value.itemdata}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="slider-container">
        <div className="slider-title-container">
          <h1 className="slider-title">{props.title}</h1>
        </div>
        <div className="slider-content">
          <div className="slider-titleData">{titleData}</div>
          <hr />
          <div className="slider-data">{data}</div>
        </div>
        <div className="slider">
          {props.keyvalues.map((value, i) => (
            <div onClick={() => handleClick(i)} className="slider-button">
              {i === activeIndex ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <circle cx="8" cy="8" r="8" />{" "}
                </svg>
              ) : (
                " "
              )}
              {i !== activeIndex ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-circle"
                  viewBox="0 0 16 16"
                  id="IconChangeColor"
                >
                  {" "}
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    id="mainIconPathAttribute"
                  ></path>{" "}
                </svg>
              ) : (
                " "
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
