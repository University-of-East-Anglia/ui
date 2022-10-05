import React from "react";
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
  return (
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
  );
};
