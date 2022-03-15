import React from "react";
import FacebookSVG from "./Facebook";
import TwitterSVG from "./Twitter";
import InstagramSVG from "./Instagram";

import "../App.scss";

export interface Props {
  icon: "facebook" | "twitter" | "instagram";
}

export const Hero = (props: any) => {
  let iconClass: string = "w-8 h-8";
  switch (props.icon) {
    case "facebook":
      var displayIcon = <FacebookSVG class={iconClass} />;
      break;
    case "twitter":
      var displayIcon = <TwitterSVG class={iconClass} />;
      break;
    case "instagram":
      var displayIcon = <InstagramSVG class={iconClass} />;
      break;
    default:
      return;
  }
  return <>{displayIcon}</>;
};
