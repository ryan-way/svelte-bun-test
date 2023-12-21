import { derived } from "svelte/store";
import { CHARACTERS_QUERY } from "./queries";
import { client } from "./client";
import { queryStore } from "@urql/svelte";
import type { Characters, QueryCharactersArgs } from "$lib/gql/graphql";

const urql = queryStore<{ characters: Characters}, QueryCharactersArgs>({
    client,
    query: CHARACTERS_QUERY,
  });

  export const store = derived(urql, ({fetching, data, error}) => {
    return {fetching, characters: data?.characters.results, error: error?.message};
}, {fetching: true, characters: [], error: ""});