<script>
  import { user } from "$lib/firebase";
  import { CheckCircle, Power } from "lucide-svelte";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const isVisible = writable(true);
  onMount(() => {
    const timeout = setTimeout(() => {
      isVisible.set(false);
    }, 5000);

    return () => clearTimeout(timeout);
  });

  let loggedIn = false;
  if (user) {
    loggedIn = true;
  }
  // export let message = "You have to sign in!";
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

<!-- <div class="toast toast-end" out:fly={{ x: "100%", duration: 200 }}>
  <div
    class="alert {loggedIn
      ? 'alert-success'
      : 'alert-warning'} flex items-center gap-2"
  >
    {#if loggedIn}
      <CheckCircle color="white" />
    {:else}
      <Power color="white" />
    {/if}
    <span class="text-white">{message}</span>
  </div>
</div> -->
