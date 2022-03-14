import React from "react";
import "../App.css";

export interface Props {
  columns?: number;
  listItems: ListItem[];
}

export interface ListItem {
  term: string;
  description: string;
}

export const DescriptionList = (props: Props) => {
  return (
    <dl className={"grid gap-4 grid-cols-" + props.columns}>
      {props.listItems.map((item) => (
        <div>
          <dt className="pt-4 mb-2 font-bold">{item.term}</dt>
          <dd className="pb-4 border-b border-black">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
};
