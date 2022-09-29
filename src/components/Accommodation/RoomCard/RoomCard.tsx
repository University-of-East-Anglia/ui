import React from "react";
import "../../Card/Card.scss";

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
    <div>
      <div>
        <img src={props.image} alt={props.title} className="room-image" />

        {/* <svg
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
        </svg> */}
        <span>{props.header}</span>
      </div>
      <div>
        <div>
          <div>
            <h3>{props.title}</h3>
          </div>
          <div>
            <p>{props.excerpt}</p>
          </div>
          <div>
            {props.items.map((item, index) => (
              <div key={index}>
                <div>
                  <span>{item.roomAmount}</span>
                </div>
                <div>
                  <span>{item.perFlat}</span>
                </div>
                <div>
                  <span>{item.roomType}</span>
                </div>
                <div>
                  <span>{item.roomPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <button aria-label="find out more">
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
