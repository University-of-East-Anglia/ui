import React from "react";

export interface Props {
  listItems: ListItem[];
  reverse?: boolean;
}

export interface ListItem {
  term: string;
  description: string;
}

export const DescriptionList = (props: Props) => {
  return (
    <dl>
      {props.listItems.map((item, i) => (
        <div key={i}>
          <dt className={props.reverse === true ? "bold" : ""}>{item.term}</dt>
          <dd
            className={props.reverse === true ? "" : "bold"}
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      ))}
    </dl>
  );
};
