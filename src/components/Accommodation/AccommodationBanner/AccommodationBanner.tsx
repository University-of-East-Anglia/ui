import React from "react";
import "./AccommodationBanner.scss";

export interface Props {
  BannerTitle?: string;
  BannerItems?: Array<BannerItem>;
}

export interface BannerItem {
  itemStat: String;
  itemDescription: String;
}

export const AccommodationBanner = ({ ...props }: Props) => {

  return (
    <div className="AccommodationBanner" key={props.BannerTitle}>
      <div className="AccommodationBanner__BannerTitle">
        <h2>{props.BannerTitle}</h2>
      </div>
      <div className="AccommodationBanner__BannerItems">
        {props.BannerItems?.map((items: BannerItem) => {
          return (
            <div className="AccommodationBanner__BannerItems__BannerItem">
              <h3>{items.itemStat}</h3>
              <div className="AccommodationBanner__BannerItems__BannerItem__spacer"></div>
              <p>{items.itemDescription}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
};
