<script>
  import { user } from "$lib/firebase";
</script>

{#if $user}
  <slot />
{:else}
  <p class="text-error">You must be signed in to view this page.</p>
  <a class="btn btn-primary text-white" href="/login">Sign in</a>
{/if}
