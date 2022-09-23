import React from "react";
import "./ScholarshipsBanner.scss";

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
        <button className="apply-button">Apply for a scholarship</button>
      </div>
    </div>
  );
};
