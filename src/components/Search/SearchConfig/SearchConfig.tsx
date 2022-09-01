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

    const clearDates = () => {
      setFromDate(488890800);
      setToDate(Date.now());
      (document.getElementById("datefrom") as HTMLInputElement).value = "";
      (document.getElementById("dateto") as HTMLInputElement).value = "";
    };

    console.log(fromDate, toDate);
    return (
      <>
        <div className="datefilter">
          <div>
            <label htmlFor="datefrom">From:</label>
            <input type="date" name="datefrom" id="datefrom" onChange={convertFromDate} />
          </div>
          <div>
            <label htmlFor="dateto">To:</label>
            <input type="date" name="dateto" id="dateto" onChange={convertToDate} />
          </div>
          <button onClick={clearDates}>Clear</button>
        </div>

        <Configure
          facetingAfterDistinct={true}
          hitsPerPage={props.per_page ? props.per_page : 12}
          filters={`${props.date_attribute}: ${fromDate} TO ${toDate}`}
        />
      </>
    );
  } else {
    return (
      <Configure facetingAfterDistinct={true} hitsPerPage={props.per_page ? props.per_page : 12} />
    );
  }
};
