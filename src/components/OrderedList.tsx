import React from "react";
import "../App.css";

export interface Props {
  listItems: [];
}

export const OrderedList = (props: Props) => {
  return (
    <ol className="ml-4 list-decimal">
      {props.listItems.map((item) => (
        <li className="mb-2">{item}</li>
      ))}
    </ol>
  );
};
