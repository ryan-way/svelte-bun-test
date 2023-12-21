<script>
  import Header from './Header.svelte';
  import './styles.css';
</script>

<div class="app">
  <header>
    <Header />
  </header>
  <main>
    <slot />
  </main>
</div>

<style>
</style>
