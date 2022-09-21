import React from "react";
import "../Card.scss";
import { CTA } from "../../CTAs/CTA";

export interface Props {
  keyvalues: KeyValues[];
  title: string;
  header: string;
}

export interface KeyValues {
  itemtitle: string;
  itemdata: string;
}

export const ScholarshipsCard = ({ ...props }: Props) => {
  return (
    <div className="card scholarships-card">
      <div>
        {" "}
        <svg
          type="button"
          xmlns="http://www.w3.org/2000/svg"
          className="chevron--plus"
          viewBox="0 0 17 16"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="card-heading">{props.header}</span>
      </div>
      <div className="card-content">
        <div className="card-text">
          <h3 className="card-title">{props.title}</h3>
          <div className="key-values">
            {props.keyvalues.map((value, i) => (
              <div className="row">
                <div className="column">
                  <span>{value.itemtitle}</span>
                </div>
                <div className="column vertical">
                  <span>{value.itemdata}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card-cta">
        <CTA reverse={true} title="Find out more" />
      </div>
    </div>
  );
};
