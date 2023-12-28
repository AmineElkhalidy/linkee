<script>
  import "../app.css";

  export let title = "Linkee - Everything you are in one link";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
  <slot />
</div>
