import React from "react";
import "../ScholarshipsContent.scss";

export interface Props {
  contents: Contents[];
  link: string;
  anchor: string;
}

export interface Contents {
  header: string;
  content: string;
}

export const InfoContent = (props: Props) => {
  return (
    <div className="info-container">
      <h1 className="info-header">Government Funding</h1>
      {props.contents.map((item, i) => (
        <div key={i} className="item container">
          <h1 className="item-title">{item.header}</h1>
          <p className="item-content">{item.content}</p>
        </div>
      ))}
      <div className="link-container">
        <p className="info-text">
          Use the{" "}
          <a className="info-link" href={props.link}>
            {props.anchor}
          </a>{" "}
          to check your eligibility for government funding.
        </p>
      </div>
    </div>
  );
};
