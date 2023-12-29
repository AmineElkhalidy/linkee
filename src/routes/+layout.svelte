<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Toast from "$lib/components/Toast.svelte";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";

  const isVisible = writable(true);
  onMount(() => {
    const timeout = setTimeout(() => {
      isVisible.set(false);
    }, 5000);

    return () => clearTimeout(timeout);
  });

  onMount(() => {});

  export let title = "Linkee - Everything you are in one link";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />
  <slot />
</div>

{#if $isVisible}
  <Toast />
{/if}
