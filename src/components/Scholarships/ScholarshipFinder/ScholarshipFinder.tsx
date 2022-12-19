import * as React from "react";
import "./ScholarshipFinder.scss"
import { useState, useEffect } from "react";
import { ScholarshipsCard } from "../ScholarshipsCard/index";
import { Button } from "../../Button";
import Select from "react-select";

// import { useStaticQuery, graphql } from "gatsby";

const customStyles = {
  control: (base) => ({
    ...base,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    border: "2px solid rgba(242, 242, 242, 1)",
    borderRadius: 6,
  }),
};

export interface Props {
  storyBlokCardObjects?: {};
}

export const ScholarshipFinder = ({ ...props }: Props) => {

  const [unfilteredData, setUnfilteredData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const [courseType, setCourseType] = useState(null);
  const [schoolFaculty, setSchoolFaculty] = useState(null);
  const [CountryRegion, setCountryRegion] = useState(null);
  const [year, setYear] = useState(null);

  const [hasSearched, setHasSearched] = useState(false);

  //load initial state
  useEffect(() => {
    const content = props.storyBlokCardObjects.allStoryblokEntry.edges.map((content) =>
      JSON.parse(content.node.content)
    );
    //grab the storyblok body content from the json
    const scholarshipData = content.map((body) => body.Body[0]);

    setUnfilteredData(scholarshipData);
    setFilteredData(scholarshipData);
  }, [props.storyBlokCardObjects]);

  const getOptions = (field) => {
    let returnOptions = null;
    //get each object in array containing field type i.e. TypeOfCourse
    let options = unfilteredData.map((eachObj) => {
      return { value: eachObj[field], label: eachObj[field] };
    });
    //filter out any incompleted blank values
    returnOptions = options.filter(
      (eachOption) => Object.keys(eachOption.value).length !== 0
    );
    // Remove duplicate entries in object array
    returnOptions = getUnique(returnOptions, "value");

    return returnOptions;
  };

  const updateCourseTypeState = (field) => {
    setCourseType(field);
  };

  const updatSchoolFacultyState = (field) => {
    setSchoolFaculty(field);
  };

  const updateCountryRegion = (field) => {
    setCountryRegion(field);
  };

  const updateYear = (field) => {
    setYear(field);
  };

  useEffect(() => {
    var newData = unfilteredData.filter(function (item) {
      return (
        item !== null &&
        (courseType?.value == null || courseType.value === item.TypeOfCourse) &&
        (schoolFaculty?.value == null || schoolFaculty.value === item.SchoolFaculty) &&
        (CountryRegion?.value == null || CountryRegion.value === item.CountryRegion) &&
        (year?.value == null || year.value === item.Years)
      );
    });
    setFilteredData(newData);
  }, [unfilteredData, courseType, schoolFaculty, CountryRegion, year]);

  // Removes duplicates from array
  const getUnique = (arr, comp) => {
    const unique = arr
      .map((e) => e[comp])
      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);
    return unique;
  };

  const search = () => {
    setSearchResults(filteredData);
    setHasSearched(true);
  };

  const reset = () => {
    setFilteredData(unfilteredData);
    setSearchResults([]);
    setCourseType(null);
    setSchoolFaculty(null);
    setCountryRegion(null);
    setYear(null);
    setHasSearched(false);
  };

  // console.log(searchResults);

  return (
    <div className="scholarship-finder">
      <div className="dropdown-items">
        <div className="dropdown">
          <fieldset>
            <legend>Course Type</legend>
            <Select
              className="scholarship-finder dropdown-container"
              options={getOptions("TypeOfCourse")}
              onChange={updateCourseTypeState}
              placeholder={"Select..."}
              styles={customStyles}
              aria-label="dropdown"
              value={courseType}
            />
          </fieldset>
        </div>
        <div className="dropdown">
          <fieldset>
            <legend>School or Faculty</legend>
            <Select
              className="scholarship-finder dropdown-container"
              options={getOptions("SchoolFaculty")}
              onChange={updatSchoolFacultyState}
              placeholder={"Select..."}
              styles={customStyles}
              aria-label="dropdown"
              value={schoolFaculty}
            />
          </fieldset>
        </div>
      </div>
      <div className="dropdown-items">
        <div className="dropdown">
          <fieldset>
            <legend>Country / Region</legend>
            <Select
              className="scholarship-finder dropdown-container"
              options={getOptions("CountryRegion")}
              onChange={updateCountryRegion}
              placeholder={"Select..."}
              styles={customStyles}
              aria-label="dropdown"
              value={CountryRegion}
            />
          </fieldset>
        </div>
        <div className="dropdown">
          <fieldset>
            <legend>Year</legend>
            <Select
              className="scholarship-finder dropdown-container"
              options={getOptions("Years")}
              onChange={updateYear}
              placeholder={"Select..."}
              styles={customStyles}
              aria-label="dropdown"
              value={year}
            />
          </fieldset>
        </div>
      </div>
      <div className="button-container">
        <Button
          className="button"
          variant="primary"
          children="search"
          onClick={() => search()}
        ></Button>
        <Button
          className="button"
          variant="primary"
          children="reset"
          onClick={() => reset()}
        ></Button>
      </div>
      <div className="results-container">
        {searchResults.length > 0 || !hasSearched ? (
          <div className="results-grid"
          >
            {searchResults.map((arr, index) => {
              return (
                <ScholarshipsCard
                  Years={arr.Years}
                  TotalValue={arr.Value}
                  OfficialNameOfScholarship={arr.OfficialNameOfScholarship}
                  URLforDetailsPage={arr.URLforDetailsPage}
                  buttonText="View more"
                  SchoolFaculty={arr.schoolFaculty}
                  FundingType={arr.FundingType}
                  ApplicantsNationality={arr.ApplicantsNationality}
                  TypeOfCourse={arr.TypeOfCourse}
                />
              );
            })}
          </div>
        ) : (
          <div className="warning-container">
            <p className="warning-text">
              No results found, try changing your search options
            </p>
          </div>
        )}
      </div>
    </div>
  );
}