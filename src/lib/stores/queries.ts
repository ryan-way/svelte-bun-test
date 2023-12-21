import type { Characters, Episodes, Locations, QueryCharacterArgs, QueryEpisodesArgs, QueryLocationArgs } from "$lib/gql/graphql";
import { gql } from "@urql/svelte";

export const CHARACTERS_QUERY = gql<Characters, QueryCharacterArgs>`
query CharactersQuery {
  characters {
    results {
      id
      gender
      name
      image
    }
  }
}
`
export const LOCATIONS_QUERY = gql<Locations, QueryLocationArgs>`
query LocationsQuery {
  locations {
    results {
      name
      dimension
      id
    }
  }
}
`
export const EPISODES_QUERY = gql<Episodes, QueryEpisodesArgs>`
query EpisodesQuery {
  episodes {
    results {
      air_date
      episode
      name
    }
  }
}
`