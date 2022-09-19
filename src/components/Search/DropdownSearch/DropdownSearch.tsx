import React from "react";
import "../Search.scss";
import { InstantSearch } from "react-instantsearch-hooks-web";

import algoliasearch from "algoliasearch/lite";
import { Autocomplete } from "../SearchAutocomplete/Autocomplete";

const searchClient = algoliasearch("CEB2JYCR23", "5a7f8c37938396f582c8eb005bdc963a");

export const DropdownSearch = (props: any) => {
  return (
    <div className="ui-search">
      <InstantSearch searchClient={searchClient} indexName={props.index_name}>
        <div className="ui-searchbox-cont">
          <h1 className="ui-heading ui-heading--sm">{props.page_title}</h1>
          <Autocomplete
            searchClient={searchClient}
            placeholder="Degree level..."
            detachedMediaQuery="none"
            openOnFocus
            className="ui-dropdownsearch"
          />
        </div>
      </InstantSearch>
    </div>
  );
};
