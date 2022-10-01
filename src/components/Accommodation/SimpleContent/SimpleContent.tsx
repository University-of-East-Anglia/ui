import React from "react";
import "../RoomContent.scss";

export interface Props {
  header: string;
  content: string;
}

export const SimpleContent = ({ ...props }: Props) => {
  return (
    <div className="simple-content-container">
      <div className="simple-header-container">
        <h1 className="simple-header">{props.header}</h1>
      </div>
      <div className="simple-excerpt-container">
        <p className="simple-excerpt">{props.content}</p>
      </div>
    </div>
  );
};
