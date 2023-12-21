<script>
  import { store } from '$lib/stores/episodes';
</script>

{#if $store.fetching}
  <p>Loading...</p>
{:else if $store.error}
  <p>Oh no... {$store.error}</p>
{:else if $store.episodes}
  <div>
    {#each $store.episodes as episode}
      <div>
        <span>{episode?.episode}: {episode?.name}, {episode?.air_date}</span>
      </div>
    {/each}
  </div>
{:else}
  <div></div>
{/if}
