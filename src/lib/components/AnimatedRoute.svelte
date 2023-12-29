<script>
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";
</script>

{#key $page.url}
  <div in:fly={{ x: "-100%", duration: 500 }} class="pb-10">
    <slot />
  </div>
{/key}
