import { derived } from "svelte/store";
import { LOCATIONS_QUERY } from "./queries";
import { client } from "./client";
import { queryStore } from "@urql/svelte";
import type { Locations } from "$lib/gql/graphql";

const urql = queryStore<{ locations: Locations }, {}>({
    client,
    query: LOCATIONS_QUERY
  });

  export const store = derived(urql, ({fetching, data, error}) => {
    return {fetching, locations: data?.locations.results, error: error?.message};
}, {fetching: true, locations: [], error: ""});