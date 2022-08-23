import React from "react";
import { createElement, Fragment, useEffect, useRef, useState, useMemo } from "react";
import { render } from "react-dom";
import { usePagination, useSearchBox } from "react-instantsearch-hooks";
import { autocomplete, AutocompleteOptions } from "@algolia/autocomplete-js";
import { BaseItem } from "@algolia/autocomplete-core";
import type { SearchClient } from "algoliasearch/lite";

// import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
// import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { debounce } from "@algolia/autocomplete-shared";

import "@algolia/autocomplete-theme-classic";

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
  searchClient: SearchClient;
  className?: string;
  //querySuggestionsIndex?: string;
};

type SetInstantSearchUiStateOptions = {
  query: string;
};
export function Autocomplete({
  searchClient,
  className,
  //  querySuggestionsIndex,
  ...autocompleteProps
}: AutocompleteProps) {
  console.log(autocompleteProps);
  const autocompleteContainer = useRef<HTMLDivElement>(null);

  const { query, refine: setQuery } = useSearchBox();
  const { refine: setPage } = usePagination();

  const [instantSearchUiState, setInstantSearchUiState] = useState<SetInstantSearchUiStateOptions>({
    query,
  });
  const debouncedSetInstantSearchUiState = debounce(setInstantSearchUiState, 500);
  const plugins = useMemo(() => {
    // const recentSearches = createLocalStorageRecentSearchesPlugin({
    //   key: "instantsearch",
    //   limit: 3,
    //   transformSource({ source }) {
    //     return {
    //       ...source,
    //       onSelect({ item }) {
    //         setInstantSearchUiState({ query: item.label });
    //       },
    //     };
    //   },
    // });
    // const querySuggestions = createQuerySuggestionsPlugin({
    //   searchClient,
    //   indexName: querySuggestionsIndex,
    //   getSearchParams() {
    //     return recentSearches.data!.getAlgoliaSearchParams({
    //       hitsPerPage: 6,
    //     });
    //   },
    //   transformSource({ source }) {
    //     return {
    //       ...source,
    //       sourceId: "querySuggestionsPlugin",
    //       onSelect({ item }) {
    //         setInstantSearchUiState({ query: item.query });
    //       },
    //       getItems(params) {
    //         if (!params.state.query) {
    //           return [];
    //         }
    //         return source.getItems(params);
    //       },
    //     };
    //   },
    // });
    //return [recentSearches, querySuggestions];
  }, []);

  useEffect(() => {
    setQuery(instantSearchUiState.query);
    setPage(0);
  }, [instantSearchUiState]);

  useEffect(() => {
    if (!autocompleteContainer.current) {
      return;
    }

    const autocompleteInstance = autocomplete({
      ...autocompleteProps,
      container: autocompleteContainer.current,
      initialState: { query },
      onReset() {
        setInstantSearchUiState({ query: "" });
      },
      onSubmit({ state }) {
        setInstantSearchUiState({ query: state.query });
      },
      renderer: { createElement, Fragment },
      //plugins,
      onStateChange({ prevState, state }) {
        if (prevState.query !== state.query) {
          debouncedSetInstantSearchUiState({
            query: state.query,
          });
        }
      },
    });

    return () => autocompleteInstance.destroy();
  }, [plugins]);

  return <div className={className} ref={autocompleteContainer} />;
}
