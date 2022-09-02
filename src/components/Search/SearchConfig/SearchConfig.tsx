import React, { useState } from "react";
import { Configure } from "react-instantsearch-hooks-web";

export const SearchConfig = (props: any) => {
  console.log(props.has_date_filter);
  if (props.has_date_filter === true) {
    const [fromDate, setFromDate] = useState<number | null>(488890800);
    const [toDate, setToDate] = useState<number | null>(Date.now());

    const convertFromDate = (e: any) => {
      let newFromDate: number | null = parseInt(
        (new Date(e.target.value).getTime() / 1000).toFixed(0)
      );
      setFromDate(newFromDate);
    };

    const convertToDate = (e: any) => {
      let newToDate: number | null = parseInt(
        (new Date(e.target.value).getTime() / 1000).toFixed(0)
      );
      setToDate(newToDate);
    };

    const clearFromDate = () => {
      setFromDate(488890800);
      (document.getElementById("datefrom") as HTMLInputElement).value = "";
    };
    const clearToDate = () => {
      setToDate(Date.now());
      (document.getElementById("dateto") as HTMLInputElement).value = "";
    };

    console.log(fromDate, toDate);
    return (
      <>
        <div className="datefilter">
          <div>
            <label className="ui-heading ui-heading--xs" htmlFor="datefrom">
              Date from:
            </label>
            <div className="ui-date-input">
              <input type="date" name="datefrom" id="datefrom" onChange={convertFromDate} />
              <button
                className="ui-date-input-clear"
                title="Clear Date From"
                onClick={clearFromDate}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label className="ui-heading ui-heading--xs" htmlFor="dateto">
              Date to:
            </label>
            <div className="ui-date-input">
              <input type="date" name="dateto" id="dateto" onChange={convertToDate} />
              <button className="ui-date-input-clear" title="Clear Date To" onClick={clearToDate}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <Configure
          facetingAfterDistinct={true}
          hitsPerPage={props.per_page ? props.per_page : 12}
          filters={`${props.date_attribute}: ${isNaN(fromDate as any) ? 488890800 : fromDate} TO ${
            isNaN(toDate as any) ? Date.now() : toDate
          }`}
        />
      </>
    );
  } else {
    return (
      <Configure facetingAfterDistinct={true} hitsPerPage={props.per_page ? props.per_page : 12} />
    );
  }
};
