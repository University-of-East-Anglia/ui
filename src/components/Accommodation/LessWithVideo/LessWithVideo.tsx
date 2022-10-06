import React from "react";
import { Video } from "../../Video";
import "./LessWithVideo.scss";
export interface Props {
  roomAmount: RoomAmount[];
  roomPrice: RoomPrice[];
  excerpt: string;
  excerpt_title: string;
  videoUrl: string | string[];
  controls: boolean;
}

export interface RoomAmount {
  value: string;
  label: string;
}

export interface RoomPrice {
  value: string;
  label: string;
}

export const LessWithVideo = ({ ...props }: Props) => {
  return (
    <div className="less-video-room-detail">
      <div className="less-video-container">
        {" "}
        <Video videoUrl={props.videoUrl} controls={props.controls} />
      </div>
      <div className="less-video-content-container">
        <div className="less-content-container">
          <div className="less-video-column-left">
            <div className="less-video-detail-container">
              {props.roomAmount.map((amount, index) => (
                <div key={index} className="less-video-detail-list">
                  <span className="less-video-detail-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />{" "}
                    </svg>
                    {amount.value}
                  </span>
                </div>
              ))}
              <hr />
              {props.roomPrice.map((price, index) => (
                <div key={index} className="less-video-detail-list">
                  <span className="less-video-detail-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-currency-pound"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="M4 8.585h1.969c.115.465.186.939.186 1.43 0 1.385-.736 2.496-2.075 2.771V14H12v-1.24H6.492v-.129c.825-.525 1.135-1.446 1.135-2.694 0-.465-.07-.913-.168-1.352h3.29v-.972H7.22c-.186-.723-.372-1.455-.372-2.247 0-1.274 1.047-2.066 2.58-2.066a5.32 5.32 0 0 1 2.103.465V2.456A5.629 5.629 0 0 0 9.348 2C6.865 2 5.322 3.291 5.322 5.366c0 .775.195 1.515.399 2.247H4v.972z" />{" "}
                    </svg>
                    {price.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="less-video-right-content">
            {" "}
            <div className="less-video-excerpt-container">
              <h1 className="less-video-excerpt-title">{props.excerpt_title}</h1>
              <p className="less-video-excerpt">{props.excerpt}</p>
            </div>
          </div>
        </div>
        <div className="show-more-container">
          <a type="button" className="show-more-button">
            Show more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
