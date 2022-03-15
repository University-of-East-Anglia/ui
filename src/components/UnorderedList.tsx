import React from "react";
import "../App.scss";

export interface Props {
  listItems: [];
}

export const UnorderedList = (props: Props) => {
  return (
    <ul className="ml-4 list-disc">
      {props.listItems.map((item) => (
        <li className="mb-2">{item}</li>
      ))}
    </ul>
  );
};
