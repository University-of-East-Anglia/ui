import React from "react";
import "./AccommodationCard.scss";
import { Button } from "../../Button";

export interface Props {
  AccommodationName?: string;
  image?: string;
  overview?: string;
  rooms?: number;
  bathroom?: string;
  occupancy_text?: string;
  cost?: number;
  url?: string;
}

export const AccommodationCard = ({ ...props }: Props) => {

  return (
    <div className="AccommodationCard" key={props.AccommodationName}>
      {/* Displays on card the first image of images array */}
      {(props.image) ?
        <div className="AccommodationCard__img"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
        </div> :
        <div className="AccommodationCard__text no-image-text" >No image available</div>
      }

      {/* Displays card's content container */}
      <div className="AccommodationCard__content">
        {/* Displays card's textual content */}
        <div className="AccommodationCard__text">
          <h3 className="AccommodationCard__title">{props.AccommodationName}</h3>

          {/* TODO use 'html-react-parser' or similar (it's safer)*/}
          <div>
            {props.overview}
          </div>

          {/* Displays room details with icons */}
          <div className="AccommodationCard__key-details">
            <div className="AccommodationCard__key-details__item b-border">
              <div className="AccommodationCard__key-details__icon">
                {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              </div>
              <div className="AccommodationCard__key-details__text">
                {props.rooms} rooms
              </div>
            </div>

            <div className="AccommodationCard__key-details__item b-border lh-border">
              <div className="AccommodationCard__key-details__icon">
                {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" />
                </svg>
              </div>
              <div className="AccommodationCard__key-details__text">
                {props.bathroom}
              </div>
            </div>
            <div className="AccommodationCard__key-details__item">
              <div className="AccommodationCard__key-details__icon">
                {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              </div>
              <div className="AccommodationCard__key-details__text">
                {props.occupancy_text}
              </div>
            </div>
            <div className="AccommodationCard__key-details__item lh-border">
              <div className="AccommodationCard__key-details__icon">
                {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 480" fill="currentColor">
                  <path d="M112 160.4c0-35.5 28.8-64.4 64.4-64.4c6.9 0 13.8 1.1 20.4 3.3l81.2 27.1c16.8 5.6 34.9-3.5 40.5-20.2s-3.5-34.9-20.2-40.5L217 38.6c-13.1-4.4-26.8-6.6-40.6-6.6C105.5 32 48 89.5 48 160.4V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H48v44.5c0 17.4-4.7 34.5-13.7 49.4L4.6 431.5c-5.9 9.9-6.1 22.2-.4 32.2S20.5 480 32 480H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H88.5l.7-1.1C104.1 390 112 361.5 112 332.5V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V160.4z" />
                </svg>
              </div>
              <div className="AccommodationCard__key-details__text">
                £{props.cost?.toFixed(2)} per week
              </div>
            </div>
          </div>

        </div>
        {/* Displays card's 'view more' button linking to more details for current property */}
        <div className="AccommodationCard__cta">
          <Button variant="primary" width="full">
            <a
              href={props.url}
              title="go to accommodation details"> View more
            </a>
            <i className="icon-chevron-right">{">"}</i>
          </Button>
        </div>
      </div>
    </div>
  )
};
