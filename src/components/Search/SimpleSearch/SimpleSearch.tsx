import React from "react";
import "../Search.scss";
import {
  Configure,
  InstantSearch,
  useHits,
  Highlight,
  Snippet,
} from "react-instantsearch-hooks-web";

import algoliasearch from "algoliasearch/lite";
import { Autocomplete } from "../SearchAutocomplete/Autocomplete";

const searchClient = algoliasearch("CEB2JYCR23", "5a7f8c37938396f582c8eb005bdc963a");

export const SimpleSearch = (props: any) => {
  return (
    <div className="ui-search">
      <InstantSearch searchClient={searchClient} indexName={props.index_name}>
        <Configure facetingAfterDistinct={true} hitsPerPage={props.hits_returned} />

        <div className="ui-searchbox-cont">
          <Autocomplete
            searchClient={searchClient}
            placeholder="Search"
            detachedMediaQuery="none"
            openOnFocus
            className="ui-searchbox"
          />
          <SearchBoxHits {...props} />
        </div>
      </InstantSearch>
    </div>
  );
};

function SearchBoxHits(props: any) {
  const { hits, results, sendEvent } = useHits(props);
  console.log(results);
  if (results?.query.length === 0) {
    return null;
  } else if (results?.query.length != 0 && results?.nbHits === 0) {
    return <div className="ui-searchbox-hits">No results found</div>;
  } else {
    return (
      <ul className="ui-searchbox-hits">
        {hits.map((hit: any, i: number) => (
          <li className="ui-searchbox-hit" key={i}>
            {hit.image ? (
              <img className="ui-image ui-image--thumb" src={hit.image} alt={hit.title} />
            ) : null}
            <div>
              <span className="ui-heading ui-heading--sm">
                <Highlight hit={hit} attribute="title" />
              </span>
              <p>
                <Snippet hit={hit} attribute="content" />
              </p>
              <a className="ui-heading--xs" href={hit.url} title={hit.title}>
                Read more
              </a>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
