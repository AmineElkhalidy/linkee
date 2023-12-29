<script lang="ts">
  import UserLink from "$lib/components/UserLink.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <meta name="description" content={data.bio} />
  <title>@{data.username} Links</title>
</svelte:head>

<main class="prose text-center mx-auto mt-32">
  <h1 class="text-5xl sm:text-6xl md:text-7xl text-purple-500">
    @{data.username}
  </h1>

  <div class="my-6">
    <img
      src={data.photoURL ?? "/profile.webp"}
      alt="Pic URL"
      width="256"
      class="mx-auto rounded-full"
    />
  </div>

  <p class="text-lg sm:text-xl my-8 text-white">
    {data.bio ?? "No bio yet..."}
  </p>

  <ul class="list-none">
    {#each data.links as item}
      <UserLink {...item} />
    {/each}
  </ul>
</main>
