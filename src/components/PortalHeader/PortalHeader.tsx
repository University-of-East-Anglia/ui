import React, { Component } from "react";
import { UEAGlint } from "../Icons/UEAGlints";
import { PortalMenu } from "../PortalMenu";
import "./PortalHeader.scss";

export interface Props {
  data: navItem[];
}

interface navItem {
  colorSchemeId?: string;
  companyId?: string;
  createDate?: number;
  css?: any;
  description?: string;
  descriptionCurrentValue?: string;
  groupId?: string;
  iconImageId?: string;
  keywords?: string;
  keywordsCurrentValue?: string;
  lastPublishDate?: any;
  layoutPrototypeLinkEnabled?: boolean;
  layoutPrototypeUuid?: string;
  modifiedDate?: number;
  mvccVersion?: string;
  name?: string;
  plid?: string;
  privateLayout?: boolean;
  robots?: string;
  robotsCurrentValue?: string;
  sourcePrototypeLayoutUuid?: string;
  themeId?: string;
  title?: string;
  titleCurrentValue?: string;
  type?: string;
  typeSettings?: string;
  userId?: string;
  userName?: string;
  friendlyURL?: string;
  hidden?: boolean;
  layoutId?: string;
  nameCurrentValue?: string;
  parentLayoutId?: string;
  priority?: number;
  uuid?: string;
}

interface ComponentState { }

export class PortalHeader extends Component<Props, ComponentState> {
  state: ComponentState = {};

  render() {
    return (
      <div className={"portal-header-container"}>
        <header className="header">
          <a className="logo-area" href="/">
            <h1>My UEA</h1>
            <UEAGlint glint="blue"/>
          </a>
          <PortalMenu data={this.props.data} />
        </header>
      </div>
    );
  }
}