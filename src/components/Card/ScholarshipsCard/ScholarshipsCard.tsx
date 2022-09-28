import React from "react";
import "../Card.scss";

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
      <div className="card-header-container">
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
          <div className="card-title-container">
            <h3 className="card-title">{props.title}</h3>
          </div>
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
      <div>
        <button className="card-button" aria-label="find out more">
          Find out more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cta-chevron--right"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
