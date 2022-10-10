import React, { useState } from "react";
import { Video } from "../../Video";
import "./MoreWithImage.scss";

export interface Props {
  roomAmount: RoomAmount[];
  slideImages: SlideImages[];
  roomPrice: RoomPrice[];
  room_title: string;
  banner_title: string;
  map_title: string;
  excerpt_title: string;
  excerpt: string;
  image: string;
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

export interface SlideImages {
  value: string;
  label: string;
}

export const MoreWithImage = ({ ...props }: Props) => {
  const slideImages = [
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
  ];
  const [imageData, setImageData] = useState(slideImages[0].value);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    console.log(index);
    const imageSlider = props.slideImages[index].value;
    setImageData(imageSlider);
    setActiveIndex(index);
  };
  return (
    <div className="more-image-room-detail">
      <div className="more-room-title-container">
        <h1 className="more-room-title">{props.room_title}</h1>
      </div>
      <div className="slider-container">
        <div className="more-image-container">
          <img src={imageData} alt={props.room_title} />
        </div>
        <div className="slider">
          {props.slideImages.map((image, i) => (
            <div key={i} onClick={() => handleClick(i)} className="slider-button">
              {i === activeIndex ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <circle cx="8" cy="8" r="8" />{" "}
                </svg>
              ) : (
                " "
              )}
              {i !== activeIndex ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-circle"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
                </svg>
              ) : (
                " "
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="more-image-content-container">
        <div className="more-content-container">
          <div className="more-image-column-left">
            <div className="more-image-detail-container">
              {props.roomAmount.map((amount, index) => (
                <div key={index} className="more-image-detail-list">
                  <span className="more-image-detail-item">
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
                <div key={index} className="more-image-detail-list">
                  <span className="more-image-detail-item">
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
            <div className="more-video-container">
              <Video videoUrl={props.videoUrl} controls={props.controls} />
            </div>

            <div className="map-container-second">
              <h1 className="map-title-second">{props.map_title}</h1>
              <img src={props.image} alt={props.map_title} className="map-second" />
            </div>
          </div>
          <div className="more-image-right-content">
            {" "}
            <div className="more-image-excerpt-container">
              <h1 className="more-image-excerpt-title">{props.excerpt_title}</h1>
              <p className="more-image-excerpt">{props.excerpt}</p>
            </div>
            <div className="more-map-container">
              <h1 className="more-map-title">{props.map_title}</h1>
              <img src={props.image} alt={props.map_title} className="more-map" />
            </div>
            <div className="more-banner-container">
              <div className="more-banner-title-container">
                {" "}
                <p className="more-banner-title">{props.banner_title}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="show-less-container">
          <a type="button" className="show-less-button">
            Show less
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-minus-circle"
              id="IconChangeColor"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
