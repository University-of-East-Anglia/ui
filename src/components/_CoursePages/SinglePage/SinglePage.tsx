import React, { Component } from "react";
import { SidebarNav } from "../../SidebarNav";
import { CTA } from "../../CTAs/CTA";
import { KeyDetails } from "../../_CourseComponents/KeyDetails";
import { Accordion } from "../../Accordion";

import "../../App.scss";

export interface ComponentProps {
  navItems: navObj[];
  cta_title1: string;
  cta_link1: string;
  cta_reverse1?: boolean;
  cta_title2: string;
  cta_link2: string;
  cta_reverse2?: boolean;
  kd_school: string;
  kd_schoolURL: string;
  kd_courseTitle: string;
  kd_keyDetails: DescriptionList[];
  accordion: AccordionContent[];
}

interface navObj {
  anchor: string;
  url: string;
}
interface DescriptionList {
  term: string;
  description: string;
}
export interface AccordionContent {
  title: string;
  content: string;
}

interface ComponentState {}

export class SinglePage extends Component<ComponentProps, ComponentState> {
  state: ComponentState = {};

  render() {
    return (
      <div className="singlePage">
        <div className="grid grid-cols-1 mx-auto md:grid-cols-4">
          <div className="relative w-full col-span-1 px-6 text-white bg-gray-dark">
            <div className="sticky top-0 py-12 mx-auto">
              <SidebarNav navItems={this.props.navItems} />
              <CTA
                title={this.props.cta_title1}
                link={this.props.cta_link1}
                reverse={this.props.cta_reverse1}
              />
              <CTA title={this.props.cta_title2} link={this.props.cta_link2} />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3">
            <div className="flex flex-wrap w-full p-24 bg-gray-700">
              <div className="w-full">Back to search results</div>
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
                <div className="grid col-span-2 gap-4">
                  <KeyDetails
                    school={this.props.kd_school}
                    schoolURL={this.props.kd_schoolURL}
                    courseTitle={this.props.kd_courseTitle}
                    keyDetails={this.props.kd_keyDetails}
                  />
                  <div className="grid grid-cols-2 gap-4"></div>
                </div>
                <div className="grid col-span-1 gap-4">
                  <div className="p-6 rounded-lg bg-pink">
                    <h3>Hear from our students</h3>
                    <p>
                      Find out what it’s like to be a part of the School of Biological Sciences at
                      UEA.
                    </p>
                    <a href="https://www.uea.ac.uk">Find out more</a>
                  </div>
                </div>
              </div>
              <div className="w-full py-6 text-center text-white">Scroll For More</div>
            </div>
            <div id="main_content" className="px-24">
              <Accordion accordion={this.props.accordion} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
