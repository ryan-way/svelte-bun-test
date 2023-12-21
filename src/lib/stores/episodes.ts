import { derived } from 'svelte/store';
import { EPISODES_QUERY } from './queries';
import { client } from './client';
import { queryStore } from '@urql/svelte';
import type { Episodes, QueryEpisodesArgs } from '$lib/gql/graphql';

const urql = queryStore<{ episodes: Episodes }, QueryEpisodesArgs>({
  client,
  query: EPISODES_QUERY
});

export const store = derived(
  urql,
  ({ fetching, data, error }) => {
    return { fetching, episodes: data?.episodes.results, error: error?.message };
  },
  { fetching: true, episodes: [], error: '' }
);
