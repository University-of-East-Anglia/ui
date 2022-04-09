import React from "react";
// import Link from "./Link";
import "./Card.scss";

export interface Props {
  image: string;
  link: string;
  title: string;
  subTitle: string;
}

export const ProfileCard = ({ ...props }: Props) => {
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

  return (
    <div className="card profile-card">
      <div className="card--image">
        <img src={props.image} alt={props.title} />
      </div>
      <a href={props.link}>
        <div className="card--content">
          <h3 className="card--title">{props.title}</h3>
          {props.subTitle ? <p className="card--excerpt">{props.subTitle}</p> : null}
        </div>
      </a>
    </div>
  );
};
