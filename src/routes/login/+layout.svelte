<script lang="ts">
  import { page } from "$app/stores";
  import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
  // import Toast from "$lib/components/Toast.svelte";
  // import { writable } from "svelte/store";
  // import { onMount } from "svelte";

  // const isVisible = writable(true);
  // onMount(() => {
  //   const timeout = setTimeout(() => {
  //     isVisible.set(false);
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // });

  export let title = "Login";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<nav class="flex justify-center my-6 mt-16">
  <ul class="steps">
    <a href="/login" class="step step-primary">Sign In</a>
    <a
      href="/login/username"
      class="step"
      class:step-primary={$page.route.id?.match(/username|photo/g)}
    >
      Choose Username
    </a>
    <a
      href="/login/photo"
      class="step"
      class:step-primary={$page.route.id?.includes("photo")}
    >
      Upload Photo
    </a>
  </ul>
</nav>

<AnimatedRoute>
  <main class="card w-5/6 md:w-4/6 bg-neutral text-neutral-content mx-auto">
    <div class="card-body items-center text-center">
      <slot />
    </div>
  </main>
</AnimatedRoute>

<!-- {#if $isVisible}
  <Toast />
{/if} -->
