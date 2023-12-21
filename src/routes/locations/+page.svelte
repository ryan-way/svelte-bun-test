<script>
  import { store } from '$lib/stores/locations';
</script>

{#if $store.fetching}
  <p>Loading...</p>
{:else if $store.error}
  <p>Oh no... {$store.error}</p>
{:else if $store.locations}
  <div>
    {#each $store.locations as location}
      <div>
        <span>{location?.name}, {location?.dimension}, {location?.created}</span>
      </div>
    {/each}
  </div>
{:else}
  <div></div>
{/if}
