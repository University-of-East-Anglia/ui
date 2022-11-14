import React from "react";
import "./ScholarshipsContent.scss";

export interface Props {
  header: string;
  content: string;
}

export const ScholarshipsContent = ({ ...props }: Props) => {
  return (
    <section>
      <div className="content-container">
        <div className="header-container">
          <h1 className="scholarship-header">{props.header}</h1>
        </div>
        <div className="excerpt-container">
          <p className="scholarship-excerpt">{props.content}</p>
        </div>
      </div>
    </section>
  );
};
