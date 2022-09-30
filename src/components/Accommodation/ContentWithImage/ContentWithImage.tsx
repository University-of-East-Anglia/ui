import React from "react";
import "../RoomContent.scss";

export interface Props {
  title: string;
  paragraphFirst: string;
  paragraphSecond: string;
  image: string;
}

export const ContentWithImage = ({ ...props }: Props) => {
  return (
    <div className="content-container">
      <img src={props.image} alt={props.title} />
      <div className="text-container">
        <div className="text-row">
          <div className="accommodation-header-container">
            <h1 className="accommodation-header">{props.title}</h1>
          </div>
          <div className="accommodation-text-container">
            <p className="accommodation-text">{props.paragraphFirst}</p>
            <br />
            <p className="accommodation-text">{props.paragraphSecond}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
