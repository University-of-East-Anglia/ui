import React, { useState } from "react";
import { Video } from "../../Video";
import "./RoomDetailWithImage.scss";

export interface Props {
  roomAmount: RoomAmount[];
  images: Images[];
  perFlat: PerFlat[];
  roomType: RoomType[];
  roomPrice: RoomPrice[];
  room_title: string;
  banner_title: string;
  map_title: string;
  excerpt: string;
  image: string;
  videoUrl: string | string[];
  controls: boolean;
  floorImage: string;
}

export interface RoomAmount {
  value: string;
  label: string;
}

export interface Images {
  value: string;
  label: string;
}

export interface PerFlat {
  value: string;
  label: string;
}
export interface RoomType {
  value: string;
  label: string;
}
export interface RoomPrice {
  value: string;
  label: string;
}
export const RoomDetailWithImage = ({ ...props }: Props) => {
  const images = [
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
    { value: "https://picsum.photos/400/300", label: "https://picsum.photos/400/300" },
  ];
  const [imageData, setImageData] = useState(images[0].value);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    console.log(index);
    const imageSlider = props.images[index].value;
    setImageData(imageSlider);
    setActiveIndex(index);
  };

  return (
    <div className="room-detail">
      <div className="room-title-container">
        <h1 className="room-title">{props.room_title}</h1>
      </div>
      <div className="slider-container">
        <div className="image-container">
          <img src={imageData} alt={props.room_title} />
        </div>
        <div className="slider">
          {props.images.map((image, i) => (
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

      <div className="content-container">
        <div className="column-left">
          <div className="detail-container">
            {props.roomAmount.map((amount, index) => (
              <div key={index} className="detail-list">
                <span className="detail-item">
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
            {props.perFlat.map((flat, index) => (
              <div key={index} className="detail-list">
                <span className="detail-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="16"
                    width="16"
                  >
                    <path
                      d="M32 384c0 28.32 12.49 53.52 32 71.09V496C64 504.8 71.16 512 80 512h32C120.8 512 128 504.8 128 496v-15.1h256V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-40.9c19.51-17.57 32-42.77 32-71.09V352H32V384zM496 256H96V77.25C95.97 66.45 111 60.23 118.6 67.88L132.4 81.66C123.6 108.6 129.4 134.5 144.2 153.2C137.9 159.5 137.8 169.8 144 176l11.31 11.31c6.248 6.248 16.38 6.248 22.63 0l105.4-105.4c6.248-6.248 6.248-16.38 0-22.63l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0C230.7 33.26 204.7 27.55 177.7 36.41L163.9 22.64C149.5 8.25 129.6 0 109.3 0C66.66 0 32 34.66 32 77.25v178.8L16 256C7.164 256 0 263.2 0 272v32C0 312.8 7.164 320 16 320h480c8.836 0 16-7.164 16-16v-32C512 263.2 504.8 256 496 256z"
                      fill="#00aef0"
                    ></path>
                  </svg>
                  {flat.value}
                </span>
              </div>
            ))}
            <hr />
            {props.roomType.map((type, index) => (
              <div key={index} className="detail-list">
                <span className="detail-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-house-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      fill-rule="evenodd"
                      d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                    />{" "}
                    <path
                      fill-rule="evenodd"
                      d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                    />{" "}
                  </svg>
                  {type.value}
                </span>
              </div>
            ))}
            <hr />
            {props.roomPrice.map((price, index) => (
              <div key={index} className="detail-list">
                <span className="detail-item">
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
          <div className="video-container">
            <Video videoUrl={props.videoUrl} controls={props.controls} />
          </div>
          <div className="column-right-map-second">
            <div className="map-container-second">
              <h1 className="map-title-second">{props.map_title}</h1>
              <img src={props.floorImage} alt={props.map_title} className="map-second" />
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="excerp-container">
            <p className="detail-excerpt">{props.excerpt}</p>
          </div>
          <div className="map-container">
            <h1 className="map-title">{props.map_title}</h1>
            <img src={props.floorImage} alt={props.map_title} className="map" />
          </div>
          <div className="banner-container">
            <div className="banner-title-container">
              {" "}
              <p className="banner-title">{props.banner_title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
