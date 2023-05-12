import React from "react";
import "./AccommodationBanner.scss";

export interface Props {
  BannerTitle?: string;
  BannerItems?: any; //Array<BannerItem>
}

// export interface BannerItem {
//   itemStat: String;
//   itemDescription: String;
// }

export const AccommodationBanner = ({ ...props }: Props) => {

  return (
    <div className="AccommodationBanner" key={props.BannerTitle}>
      {props.BannerItems?.map(items => {
        return (
          <div className="AccommodationBanner__BannerItem">
            <h3>{items.itemStat}</h3>
            <div className="AccommodationBanner__BannerItem__spacer"></div>
            <p>{items.itemDescription}</p>
          </div>
        )
      })}
    </div>
  )
};
