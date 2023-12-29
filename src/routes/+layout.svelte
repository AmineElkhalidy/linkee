<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";

  export let title = "Linkee - Everything you are in one link";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />
  <slot />
</div>
