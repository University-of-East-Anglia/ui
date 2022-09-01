import React from "react";
import { RefinementList } from "react-instantsearch-hooks-web";

export const Refinements = (props: any) => {
  return (
    <>
      {props.filters.map((filter: any) => (
        <Panel attribute={filter.attribute} heading={filter.heading} />
      ))}
    </>
  );
};

const Panel = (props: any) => {
  return (
    <div className="ui-refinement-panel">
      <span className="ui-heading ui-heading--xs">{props.heading}</span>
      <RefinementList
        attribute={props.attribute}
        classNames={{
          list: "ui-refinement-list",
          label: "ui-refinement-label",
          checkbox: "ui-refinement-checkbox",
          count: "ui-refinement-count",
          item: "ui-refinement-item",
        }}
      />
    </div>
  );
};
