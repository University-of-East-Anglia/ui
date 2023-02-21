import React from "react";

import FacebookSVG from "./Facebook";
import TwitterSVG from "./Twitter";
import InstagramSVG from "./Instagram";
import LinkedInSVG from "./LinkedIn";

import YouTubeSVG from "./YouTube";
import TicktokSVG from "./TikTok"
import { UEALogo } from "./UEALogo";
import { UEAGlint } from "./UEAGlints"; 

import "./All_icons.scss"

export interface Props {
    class?: String;
}

const All_icons = ({...props }: Props) => {

    return (
        <div className="icons">
            <div className="icons-set">
                <UEALogo class="icons-display" />
                <p>UEA Logo</p>
            </div>
            <div className="icons-set">
                <UEAGlint glint="pink"/>
                <p>UEA Glint</p>
            </div>
            <div className="icons-set">
                <UEAGlint glint="blue"/>
                <p>UEA Glint</p>
            </div>
            <div className="icons-set">
                <TicktokSVG class="icons-display" />
                <p>Tiktok</p>
            </div>
            <div className="icons-set">
                <FacebookSVG class="icons-display" />
                <p>Facebook</p>
            </div>
            <div className="icons-set">
                <TwitterSVG class="icons-display" />
                <p>Twitter</p>
            </div>
            <div className="icons-set">
                <InstagramSVG class="icons-display" />
                <p>Intagram</p>
            </div>
            <div className="icons-set">
                <LinkedInSVG class="icons-display" />
                <p>LinkedIn</p>
            </div>
            <div className="icons-set">
                <YouTubeSVG class="icons-display" />
                <p>Youtube</p>
            </div>
        </div>
    );
};

export default All_icons;