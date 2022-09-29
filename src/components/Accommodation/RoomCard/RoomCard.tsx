import React from "react";
import "./RoomCard.scss";

export interface Props {
  items: Items[];
  title: string;
  header: string;
  excerpt: string;
  image: string;
}

export interface Items {
  id: number;
  roomAmount: string;
  perFlat: string;
  roomType: string;
  roomPrice: string;
}

export const RoomCard = ({ ...props }: Props) => {
  return (
    <div className="card room-card">
      <div className="image-container">
        <img src={props.image} alt={props.title} className="room-image" />
        <div className="roomcard-header-container">
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
          <span className="roomcard-header">{props.header}</span>
        </div>
      </div>

      <div className="roomcard-title-container">
        <h1 className="roomcard-title">{props.title}</h1>
      </div>
      <div className="roomcard-excerpt-container">
        <p className="roomcard-excerpt">{props.excerpt}</p>
      </div>
      <div className="item-container">
        {props.items.map((item, index) => (
          <div key={index} className="grid-container">
            <div className="grid-child">
              <div>
                <span>{item.roomAmount}</span>
              </div>
              <div>
                <span>{item.perFlat}</span>
              </div>
            </div>
            <div className="grid-child">
              <div>
                <span>{item.roomType}</span>
              </div>
              <div>
                <span>{item.roomPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button aria-label="find out more">
          View more
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
