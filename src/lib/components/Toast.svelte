<script>
  import { user } from "$lib/firebase";
  import { CheckCircle, Power } from "lucide-svelte";
  import { fly } from "svelte/transition";
</script>

{#if $user}
  <div class="toast toast-end" out:fly={{ x: "100%", duration: 200 }}>
    <div class="alert alert-success flex items-center gap-2">
      <CheckCircle color="white" />
      <span class="text-white">You have successfully signed in.</span>
    </div>
  </div>
{:else}
  <div class="toast toast-end" out:fly={{ x: "100%", duration: 200 }}>
    <div class="alert alert-warning">
      <Power color="white" />
      <span class="text-white">You are signed out.</span>
    </div>
  </div>
{/if}
