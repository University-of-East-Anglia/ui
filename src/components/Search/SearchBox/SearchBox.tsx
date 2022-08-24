import React from "react";
import "../Search.scss";
import {
  Configure,
  InstantSearch,
  SearchBox,
  useHits,
  Highlight,
  Snippet,
  useInstantSearch,
} from "react-instantsearch-hooks-web";

import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  process.env.ALGOLIA_ACCOUNT_ID!,
  process.env.ALGOLIA_PUBLIC_SEARCH_KEY!
);

function SearchQuery(props: any) {
  const { results } = useInstantSearch();
  if (results.query.length === 0) {
    return null;
  } else {
    return <SearchBoxHits {...props} />;
  }
}

export const UISearchBox = (props: any) => {
  return (
    <div className="ui-search">
      <InstantSearch searchClient={searchClient} indexName={props.index_name}>
        <Configure facetingAfterDistinct={true} hitsPerPage={props.hits_returned} />

        <SearchBox
          placeholder={props.placeholder}
          searchAsYouType={props.search_on_type === false ? false : true}
          classNames={{
            form: "ui-searchbox",
            input: "ui-searchbox-input",
            submit: "ui-searchbox-submit",
            reset: "ui-searchbox-reset",
          }}
        />
        <SearchQuery {...props} />
      </InstantSearch>
    </div>
  );
};

function SearchBoxHits(props: any) {
  const { hits, results, sendEvent } = useHits(props);
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
            <a href={hit.url} title={hit.title}>
              Read more
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}
