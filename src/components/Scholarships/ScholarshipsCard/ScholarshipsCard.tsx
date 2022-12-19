import React from "react";
import "../../Card/Card.scss";

export interface Props {
  cardHeading?: string;
  OfficialNameOfScholarship?: string;
  TotalValue?: string;
  SchoolFaculty?: string;
  Years?: string;
  FundingType?: string;
  URLforDetailsPage?: string;
  ApplicantsNationality?: string;
  TypeOfCourse?: string;
  buttonText?: string;
}

export const ScholarshipsCard = ({ ...props }: Props) => {

  return (
    <div className="card scholarships-card">
      <div className="card-container">
        <div className="card-header-container">
          {" "}
          <svg
            type="button"
            xmlns="http://www.w3.org/2000/svg"
            className="chevron--plus"
            viewBox="0 0 17 16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="card-heading">{props.cardHeading}</span>
        </div>
        <div className="card-content">
          <div className="card-text">
            <div className="card-title-container">
              <h3 className="card-title">{props.OfficialNameOfScholarship}</h3>
            </div>
            <div className="key-values">
              {props.ApplicantsNationality &&
                <div className="row">
                  <div className="column">
                    <p>Nationality</p>
                  </div>
                  <div className="column vertical">
                    <p>{props.ApplicantsNationality}</p>
                  </div>
                </div>
              }
              {props.TypeOfCourse &&
                <div className="row">
                  <div className="column">
                    <p>Level of Study</p>
                  </div>
                  <div className="column vertical">
                    <p>{props.TypeOfCourse}</p>
                  </div>
                </div>
              }
              {props.Years &&
                <div className="row">
                  <div className="column">
                    <p>Intake</p>
                  </div>
                  <div className="column vertical">
                    <p>{props.Years}</p>
                  </div>
                </div>
              }
              {props.TotalValue &&
                <div className="row">
                  <div className="column">
                    <p>Value</p>
                  </div>
                  <div className="column vertical">
                    <p><span>£</span>{props.TotalValue}</p>
                  </div>
                </div>}
            </div>
          </div>
        </div>
        <div>
          <a href={props.URLforDetailsPage}>
            <button className="card-button" aria-label="find out more">
              <span>{props.buttonText}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cta-chevron--right"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
