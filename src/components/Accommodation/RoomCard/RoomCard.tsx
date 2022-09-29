import React from "react";
import "../../Card/Card.scss";

export interface Props {
  items: Items[];
  title: string;
  header: string;
}

export interface Items {
  id: number;
  item: string;
}

export const RoomCard = ({ ...props }: Props) => {
  return (
    <div className="card scholarships-card">
      <div className="card-header-container">
        <span className="card-heading">{props.header}</span>
      </div>
      <div className="card-content">
        <div className="card-text">
          <div className="card-title-container">
            <h3 className="card-title">{props.title}</h3>
          </div>
          <div className="key-values">
            {props.items.map((item, i) => (
              <div className="row">
                <div className="column">
                  <span>{item.item}</span>
                </div>
                <div className="column vertical">
                  <span>{item.item}</span>
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
