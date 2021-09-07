import React from "react";
import Link from "./Link";
import "../App.css";

export interface Props {
  image: string;
  bgcolor?: string;
  type: string;
  excerpt: string;
  link: string;
  anchor: string;
  title: string;
  variant: "primary" | "secondary";
  columns: 2 | 3 | 4;
}

export const Card = ({ ...props }: Props) => {
  let cardClass: string =
    "card w-full border-2 border-magenta-default rounded-lg cursor-pointer hover:shadow-lg";

  var columns: string;
  switch (props.columns) {
    case 2:
      var columns = "sm:w-1/2";
      break;
    case 3:
      var columns = "sm:w-1/3";
      break;
    case 4:
      var columns = "sm:w-1/4";
      break;
    default:
      var columns = "sm:w-1/4";
  }

  const cards: any = document.querySelectorAll(".card");
  Array.prototype.forEach.call(cards, (card) => {
    let down,
      up,
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
    <div className={columns + " " + cardClass}>
      <div className="card-image">
        <img className="w-full h-48 object-cover" src={props.image} alt={props.title} />
      </div>
      <div className="card-tags"></div>
      <div className="px-4 py-6">
        {props.type ? <span className="type">{props.type}</span> : null}
        <h2 className="text-xl font-bold mb-2">{props.title}</h2>
        {props.excerpt ? <p className="mb-6">{props.excerpt}</p> : null}
        <Link variant={props.variant} link={props.link} anchor={props.anchor} />
      </div>
    </div>
  );
};
