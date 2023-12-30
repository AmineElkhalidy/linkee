<script lang="ts">
  import UserLink from "$lib/components/UserLink.svelte";
  import type { PageData } from "./$types";
  import { userData } from "$lib/firebase";

  $: href = `/${$userData?.username}/edit`;

  export let data: PageData;
</script>

<svelte:head>
  <meta name="description" content={data.bio} />
  <title>@{data.username} Links</title>
</svelte:head>

<main class="prose text-center mx-auto mt-16">
  <h1 class="text-5xl sm:text-6xl md:text-7xl text-purple-500">
    @{data.username}
  </h1>

  <div class="my-6">
    <img
      src={data.photoURL ?? "/profile.webp"}
      alt="Pic URL"
      width="256"
      class="mx-auto rounded-full border border-purple-500"
    />
  </div>

  <p class="text-lg sm:text-xl my-8 text-white">
    {data.bio ?? "No bio yet..."}
  </p>

  <div>
    <p class="text-lg mb-2">Your social links:</p>
    <ul class="list-none mb-6 flex flex-col justify-center items-center gap-4">
      {#each data.links as item}
        <UserLink {...item} />
      {/each}
    </ul>
  </div>

  <div class="flex justify-center items-center mb-8">
    <a {href} class="btn btn-outline btn-info mx-auto my-4 px-10">
      Add a Link
    </a>
  </div>
</main>
