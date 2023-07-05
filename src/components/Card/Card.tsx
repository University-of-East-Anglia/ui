import React, { HTMLAttributes, useEffect } from "react";
// import Link from "./Link";
import "./Card.scss";

export interface Props {
  class?: string;
  image: string;
  type: string;
  excerpt: string;
  link: string;
  anchor: string;
  title: string;
}

export const Card = ({ ...props }: Props) => {
  if (typeof window !== 'undefined') {
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
  };
  const constructClass = props.class ? " " + props.class : null;
  const cardClass = "card" + constructClass;

  return (
    <div className={cardClass}>
      <div className="card--image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card--content">
        {props.type ? <span className="card--type">{props.type}</span> : null}
        {props.title && <h3 className="card--title">{props.title}</h3>}
        {props.excerpt ? <p className="card--excerpt">{props.excerpt}</p> : null}
        <a className="card--link" href={props.link} aria-label={props.title}>
          {props.anchor}
        </a>
      </div>
    </div>
  );
};
