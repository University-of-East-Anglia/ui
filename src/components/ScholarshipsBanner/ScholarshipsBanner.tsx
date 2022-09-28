import React from "react";
import "./ScholarshipsBanner.scss";
import { Button } from "../Button";

export interface Props {
  image: string;
  altText: string;
  excerpt: string;
  title: string;
}

export const ScholarshipsBanner = ({ ...props }: Props) => {
  return (
    <div className="banner-container">
      <div className="image-container">
        <img src={props.image} alt={props.altText} className="scholarship-image" />
      </div>
      <div className="text-container">
        <h1 className="scholarship-title">{props.title}</h1>
        <p className="scholarship-excerpt">{props.excerpt}</p>
        <div>
          <Button
            className="apply-button"
            variant="primary"
            children="Apply for a scholarship"
          ></Button>
        </div>
      </div>
    </div>
  );
};
