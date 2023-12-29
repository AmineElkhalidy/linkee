<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import { user, userData } from "$lib/firebase";

  export let title = "Linkee - Everything you are in one link";

  // Use them globally
  $user;
  $userData;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />
  <slot />
</div>
