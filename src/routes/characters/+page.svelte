<script>
  import { store } from '$lib/stores/characters';
</script>

{#if $store.fetching}
  <p>Loading...</p>
{:else if $store.error}
  <p>Oh no... {$store.error}</p>
{:else if $store.characters}
  <div class="card-list">
    {#each $store.characters as character}
      <div class="card">
        <img src={character?.image} alt={character?.name} />
        <div class="container">
          <h4><b>{character?.name}</b></h4>
          <p>{character?.gender}</p>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <div></div>
{/if}

<style>
  .card-list {
    display: grid;
    grid-template-columns: 17% 17% 17% 17% 17% 17%;
  }
  .card {
    height: 400px;
    width: 300px;
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 20px;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
  }

  img {
    width: 100%;
  }
</style>
