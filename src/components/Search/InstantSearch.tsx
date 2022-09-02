import React, { useState } from "react";
import "./Search.scss";
import {
  Configure,
  Highlight,
  useHits,
  InstantSearch,
  Snippet,
  CurrentRefinements,
  useConnector,
  useClearRefinements,
  usePagination,
} from "react-instantsearch-hooks-web";

import { history } from "instantsearch.js/es/lib/routers";
import { simple } from "instantsearch.js/es/lib/stateMappings";
import connectStats from "instantsearch.js/es/connectors/stats/connectStats";
import algoliasearch from "algoliasearch/lite";
import { Autocomplete } from "./SearchAutocomplete/Autocomplete";
import { Refinements } from "./SearchRefinements/Refinements";
import { SearchConfig } from "./SearchConfig/SearchConfig";

const searchClient = algoliasearch("CEB2JYCR23", "5a7f8c37938396f582c8eb005bdc963a");

const routing = {
  router: history(),
  stateMapping: simple(),
};

import type {
  StatsConnectorParams,
  StatsWidgetDescription,
} from "instantsearch.js/es/connectors/stats/connectStats";
import index from "instantsearch.js/es/widgets/index/index";

type UseStatsProps = StatsConnectorParams;

function useStats(props?: UseStatsProps) {
  return useConnector<StatsConnectorParams, StatsWidgetDescription>(connectStats, props);
}

function Stats(props: UseStatsProps) {
  const {
    hitsPerPage,
    nbHits,
    areHitsSorted,
    nbSortedHits,
    nbPages,
    page,
    processingTimeMS,
    query,
  } = useStats(props);
  return (
    <div>
      {nbHits}
      {props.showMS ? " results in " + processingTimeMS + "ms" : null}
    </div>
  );
}

function CustomClearRefinements(props: any) {
  const { refine, canRefine, createURL } = useClearRefinements(props);
  return (
    <>
      {canRefine ? (
        <button className="w-1/4 bg-gray-light" onClick={refine}>
          Clear filters
        </button>
      ) : null}
    </>
  );
}

function CustomHits(props: any) {
  const { hits, results, sendEvent } = useHits(props);
  let uiResults: any = results;
  let returnedHits: number = uiResults.nbHits;
  let processTime: number = uiResults.processingTimeMS;

  return (
    <>
      <div className="ui-search-hits">
        <div>
          {returnedHits} results in {processTime} ms
        </div>
        {hits.map((hit: any) => (
          <div
            className="ui-search-hit"
            onClick={(e: any) => e.target.closest("li").querySelector("a").click()}
          >
            <h3 className="hit-header ui-heading ui-heading--sm">
              <Highlight hit={hit} attribute="title" classNames={{ highlighted: "bg-pink" }} />
            </h3>
            {hit.content ? (
              <div>
                <Snippet hit={hit} attribute="content" classNames={{ highlighted: "bg-pink" }} />
              </div>
            ) : null}

            <a href={hit.url} className="hit-url">
              {hit.url}
            </a>
            <div className="hit-categories">
              {hit.year ? <span className="hit-category">{hit.year}</span> : null}
              {hit.primaryCategory ? (
                <span className="hit-category">{hit.primaryCategory}</span>
              ) : null}
              {hit.secondaryCategory ? (
                <span className="hit-category">{hit.secondaryCategory}</span>
              ) : null}
              {hit.department ? <span className="hit-category">{hit.department}</span> : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function CustomPagination(props: any) {
  const { currentRefinement, isFirstPage, nbPages, isLastPage, pages, refine } =
    usePagination(props);

  return (
    <ul className="ui-search-pagination">
      {isFirstPage ? null : (
        <>
          <li className="ui-pagination-item ui-pagination-item--first">
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo(0, 0);
                refine(0);
              }}
            >
              {`<<`}
            </a>
          </li>
          <li className="ui-pagination-item ui-pagination-item--prev">
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo(0, 0);
                refine(currentRefinement - 1);
              }}
            >
              {`<`}
            </a>
          </li>
        </>
      )}
      {pages.map((page) => (
        <li
          className={` ${
            page === currentRefinement ? "ui-pagination-item--current" : ""
          } ui-pagination-item`}
          key={page}
        >
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo(0, 0);
              refine(page);
            }}
          >
            {page + 1}
          </a>
        </li>
      ))}
      {isLastPage ? null : (
        <>
          <li className="ui-pagination-item ui-pagination-item--next">
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo(0, 0);
                refine(currentRefinement + 1);
              }}
            >
              {`>`}
            </a>
          </li>
          <li className="ui-pagination-item ui-pagination-item--last">
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo(0, 0);
                refine(nbPages - 1);
              }}
            >
              {`>>`}
            </a>
          </li>
        </>
      )}
    </ul>
  );
}

export const Search = (props: any) => {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    isFilterOpen ? setFilterOpen(false) : setFilterOpen(true);
  };

  return (
    <div className="ui-search">
      <InstantSearch searchClient={searchClient} indexName={props.index_name} routing={routing}>
        <div className="ui-search-header">
          <div>
            <h1 className="ui-heading ui-heading--2xl">{props.page_title}</h1>
            <Autocomplete
              searchClient={searchClient}
              placeholder="Search"
              detachedMediaQuery="none"
              openOnFocus
              className="ui-autocomplete"
            />
          </div>
        </div>

        <div className="ui-search-results">
          <button onClick={toggleFilter} className="ui-search-toggle-filter" title="Filter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <span>{isFilterOpen ? "Close" : "Open"} Filters</span>
          </button>
          <div
            className={isFilterOpen ? "ui-search-refinements open" : "ui-search-refinements close"}
          >
            <h3 className="ui-heading ui-heading--sm">Filter Options</h3>

            <CurrentRefinements
              classNames={{
                delete: "ui-refinement-delete",
                label: "ui-refinement-label",
                item: "ui-refinement-item",
                category: "ui-refinement-category",
              }}
            />

            <CustomClearRefinements />

            <SearchConfig
              per_page={props.per_page}
              has_date_filter={props.has_date_filter}
              date_attribute={props.date_attribute}
            />
            <Refinements
              filters={props.refinement_filters}
              range_slider={props.range_attribute}
              range_input={props.range_input}
            />
          </div>
          <div className="ui-search-hits-container">
            <CustomHits {...props} />
            <CustomPagination
              classNames={{
                list: "ui-pagination-list",
                item: "ui-pagination-item",
                selectedItem: "ui-pagination-item--selected",
              }}
              padding={2}
            />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};
