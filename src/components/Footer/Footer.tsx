import React, { Component } from "react";
import FacebookSVG from "../Icons/Facebook";
import TwitterSVG from "../Icons/Twitter";
import InstagramSVG from "../Icons/Instagram";
import LinkedInSVG from "../Icons/LinkedIn";
import YouTubeSVG from "../Icons/YouTube";
import TiktokSVG from "../Icons/TikTok";

import "./Footer.scss";

export interface Props {
  background: "light" | "dark";
}
interface ComponentState {}

declare const CookieControl: any;

export class Footer extends Component<Props, ComponentState> {
  state: ComponentState = {};

  render() {
    return (
      <div className={"footer-container footer-container--" + this.props.background}>
        <footer data-swiftype-index="false" className="footer">
          <p>
            &copy; UEA. All rights reserved. University of East Anglia, Norwich Research Park,
            Norwich, Norfolk, NR4 7TJ, UK | +44 (0) 1603 456161
          </p>
          <div className={"social-icons social-icons--" + this.props.background}>
            <a
              className="social-icon"
              href="https://facebook.com/ueaofficial"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <span className="sr-only">Go to our Facebook page</span>
              <FacebookSVG />
            </a>
            <a
              className="social-icon"
              href="https://twitter.com/uniofeastanglia"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <span className="sr-only">Go to our Twitter page</span>
              <TwitterSVG />
            </a>
            <a
              className="social-icon"
              href="https://youtube.com/user/ueaofficial"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <span className="sr-only">Go to our Youtube page</span>
              <YouTubeSVG />
            </a>
            <a
              className="social-icon"
              href="https://instagram.com/uniofeastanglia"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <span className="sr-only">Go to our Instagram page</span>
              <InstagramSVG />
            </a>
            <a
              className="social-icon"
              href="https://www.tiktok.com/@uniofeastanglia"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <span className="sr-only">Go to our TikTok page</span>
              <TiktokSVG />
            </a>
            <a
              className="social-icon"
              href="https://linkedin.com/school/university-of-east-anglia/"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <span className="sr-only">Go to our Linkedin page</span>
              <LinkedInSVG />
            </a>
          </div>
          <div className="policy-links">
            <a
              className="policy-link"
              href="https://www.uea.ac.uk/about/university-information/statutory-and-legal/website"
              target="_blank"
              rel="noreferrer nofollow"
            >
              Accessibility
            </a>
            |
            <a
              className="policy-link"
              href="https://www.uea.ac.uk/about/university-information/statutory-legal-policies"
              target="_blank"
              rel="noreferrer nofollow"
            >
              Legal Statements
            </a>
            |
            <a
              className="policy-link"
              href="https://www.uea.ac.uk/about/university-information/statutory-legal-policies/modern-slavery-statement"
              target="_blank"
              rel="noreferrer nofollow"
            >
              Statement on Modern Slavery
            </a>
            |
            <a
              className="policy-link"
              href="https://www.uea.ac.uk/about/university-information/statutory-and-legal/data-protection/cookie-policy"
              target="_blank"
              rel="noreferrer nofollow"
            >
              Cookie Policy
            </a>
            |
            <a
              className="policy-link"
              href="#"
              onClick={(e) => {
                e?.preventDefault();
                CookieControl.open();
              }}
              rel="noreferrer nofollow"
            >
              Manage Cookie Preferences
            </a>
            |
            <a
              className="policy-link"
              href="https://www.uea.ac.uk/about/university-information/statutory-and-legal/data-protection"
              target="_blank"
              rel="noreferrer nofollow"
            >
              Data Protection
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
