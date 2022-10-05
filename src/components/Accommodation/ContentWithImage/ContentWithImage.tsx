import React from "react";
import "../RoomContent.scss";

export interface Props {
  title: string;
  smallTitle: string;
  paragraphFirst: string;
  paragraphSecond: string;
  paragraphThird: string;
  paragraphFourth: string;
  imageTop: string;
  imageBottom: string;
}

export const ContentWithImage = ({ ...props }: Props) => {
  return (
    <div className="content-container">
      <div className="content-row">
        <div className="cost-text-container">
          <div className="cost-header-container">
            <h1 className="cost-header">{props.title}</h1>
          </div>
          <div className="cost-smallheader-container">
            <h1 className="cost-smallheader">{props.smallTitle}</h1>
          </div>
          <div className="cost-excerpt-container">
            <p className="cost-excerpt">{props.paragraphFirst}</p>
            <br />
            <p className="cost-excerpt">{props.paragraphSecond}</p>
            <br />
            <p className="cost-excerpt">{props.paragraphThird}</p>
            <br />
            <p className="cost-excerpt">{props.paragraphFourth}</p>
          </div>
        </div>
        <div className="image-container">
          <div className="cost-top-image-container">
            <img src={props.imageTop} alt={props.title} className="top-image" />
          </div>
          <div className="cost-bottom-image-container">
            <img src={props.imageBottom} alt={props.title} className="bottom-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
