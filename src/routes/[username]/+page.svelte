<script lang="ts">
  import UserLink from "$lib/components/UserLink.svelte";
  import type { PageData } from "./$types";
  import { userData, auth } from "$lib/firebase";
  import { signOut } from "firebase/auth";
  import { goto } from "$app/navigation";

  $: href = `/${$userData?.username}/edit`;

  const signOutSSR = async () => {
    const res = await fetch("/api/signin", {
      method: "DELETE",
    });

    await signOut(auth);
    goto("/login");
  };

  export let data: PageData;
</script>

<svelte:head>
  <meta name="description" content={data.bio} />
  <title>@{data.username} Links</title>
</svelte:head>

<main class="prose text-center mx-auto mt-16">
  <h1 class="text-3xl sm:text-5xl md:text-6xl text-green-500">
    @{data.username}
  </h1>

  <div class="my-6">
    <img
      src={data.photoURL ?? "/profile.webp"}
      alt="Pic URL"
      width="256"
      class="mx-auto rounded-full border border-green-500"
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

  <div class="flex flex-col justify-center items-center mb-8 gap-16">
    <a {href} class="btn btn-outline btn-info mx-auto my-4 px-10">
      Add a Link
    </a>

    <button
      on:click={signOutSSR}
      class="btn btn-error px-10 text-white font-semibold sm:text-lg"
      >Sign Out</button
    >
  </div>
</main>
