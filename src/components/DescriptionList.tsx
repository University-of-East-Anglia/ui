import React from "react";
import "../App.scss";

export interface Props {
  listItems: ListItem[];
}

export interface ListItem {
  term: string;
  description: string;
}

export const DescriptionList = (props: Props) => {
  return (
    <dl>
      {props.listItems.map((item) => (
        <div>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </div>
      ))}
    </dl>
  );
};
