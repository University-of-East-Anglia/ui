import React, { useEffect } from "react";
// import Link from "./Link";
import "../Card.scss";

export interface Props {
  image: string;
  link: string;
  title: string;
  subTitle: string;
}

export const ProfileCard = ({ ...props }: Props) => {
  useEffect(() => {
    const cards: any = document.querySelectorAll(".card");
    Array.prototype.forEach.call(cards, (card: any) => {
      let down: number,
        up: number,
        link = card.querySelector("a");
      card.onmousedown = () => (down = +new Date());
      card.onmouseup = () => {
        up = +new Date();
        if (up - down < 200) {
          link.click();
        }
      };
    });
  });

  return (
    <div className="card profile-card">
      <div className="card--image">
        <img src={props.image} alt={props.title} />
      </div>
      <a href={props.link}>
        <div className="card--content">
          <div>
            <h3 className="card--title">{props.title}</h3>
            {props.subTitle ? <p className="card--excerpt">{props.subTitle}</p> : null}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="chevron--right"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};
