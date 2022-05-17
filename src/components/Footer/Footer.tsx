import React, { Component } from "react";
import FacebookSVG from "../Facebook";
import TwitterSVG from "../Twitter";
import InstagramSVG from "../Instagram";
import LinkedInSVG from "../LinkedIn";
import YouTubeSVG from "../YouTube";

import "./Footer.scss";

export interface Props {
  background: "light" | "dark";
}
interface ComponentState {}

export class Footer extends Component<Props, ComponentState> {
  state: ComponentState = {};

  render() {
    return (
      <div className={"footer-container footer-container--" + this.props.background}>
        <footer className="footer">
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
              <FacebookSVG />
            </a>
            <a
              className="social-icon"
              href="https://facebook.com/ueaofficial"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <TwitterSVG />
            </a>
            <a
              className="social-icon"
              href="https://facebook.com/ueaofficial"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <InstagramSVG />
            </a>
            <a
              className="social-icon"
              href="https://facebook.com/ueaofficial"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <LinkedInSVG />
            </a>
            <a
              className="social-icon"
              href="https://facebook.com/ueaofficial"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <YouTubeSVG />
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
