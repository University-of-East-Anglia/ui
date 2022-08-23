import React, { useState } from "react";
import "./Search.scss";
import {
  Configure,
  Highlight,
  useHits,
  InstantSearch,
  RefinementList,
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

const searchClient = algoliasearch(
  process.env.ALGOLIA_ACCOUNT_ID!,
  process.env.ALGOLIA_PUBLIC_SEARCH_KEY!
);

const routing = {
  router: history(),
  stateMapping: simple(),
};

import type {
  StatsConnectorParams,
  StatsWidgetDescription,
} from "instantsearch.js/es/connectors/stats/connectStats";

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
  console.log(canRefine);
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
  console.log(isFilterOpen);
  return (
    <div className="ui-search">
      <InstantSearch searchClient={searchClient} indexName={props.index_name} routing={routing}>
        <Configure facetingAfterDistinct={true} hitsPerPage={12} />
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
          <div className="ui-search-refinements">
            <h3 className="ui-heading ui-heading--sm">Filter Options</h3>
            {isFilterOpen ? null : (
              <CurrentRefinements
                classNames={{
                  delete: "ui-refinement-delete",
                  label: "ui-refinement-label",
                  item: "ui-refinement-item",
                  category: "ui-refinement-category",
                }}
              />
            )}
            <CustomClearRefinements />
            <Panel heading="Clearing Vacancies" attribute="clearing" />
            <Panel heading="Year" attribute="academicYear" />
            <Panel heading="Course Type" attribute="primaryCategory" />
            <Panel heading="Other Filters" attribute="secondaryCategory" />
            <Panel heading="Department" attribute="department" />
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

const Panel = (props: any) => {
  return (
    <div className="ui-refinement-panel">
      <span className="ui-heading ui-heading--xs">{props.heading}</span>
      <RefinementList
        attribute={props.attribute}
        classNames={{
          list: "ui-refinement-list",
          label: "ui-refinement-label",
          checkbox: "ui-refinement-checkbox",
          count: "ui-refinement-count",
          item: "ui-refinement-item",
        }}
      />
    </div>
  );
};
