<script>
  import { user } from "$lib/firebase";
</script>

{#if $user}
  <slot />
{:else}
  <p class="text-error mb-2 text-lg">
    You must be signed in to view this page.
  </p>
  <a class="btn btn-primary text-white text-lg px-10" href="/login">Sign in</a>
{/if}
