<script>
  import { user } from "$lib/firebase";
  import { auth } from "$lib/firebase";
  import { signOut } from "firebase/auth";
</script>

<header class="fixed top-5 left-0 w-full px-10">
  <nav class="navbar bg-slate-100 rounded-full px-4">
    <div class="flex-1">
      <span class="btn btn-ghost text-xl text-black md:text-2xl">Linkee</span>
    </div>

    {#if $user}
      <button
        on:click={() => signOut(auth)}
        class="btn btn-primary text-white px-10 rounded-full md:text-lg"
        >Logout</button
      >{:else}
      <a
        href="/login"
        class="btn btn-primary text-white px-10 rounded-full md:text-lg"
        >Login</a
      >
    {/if}
  </nav>
</header>

<main>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center mt-20">
      <div class="max-w-4xl">
        <h1 class="text-5xl font-bold">
          <span class="text-primary">Linkee:</span> Shape Yourself in One Link
        </h1>
        <p class="py-6 lg:px-20">
          Join 40M+ people using Linktree for their link in bio. One link to
          help you share everything you create, curate and sell from your
          Instagram, TikTok, Twitter, YouTube and other social media profiles.
        </p>
        <a
          href="/login"
          class="btn btn-primary text-white rounded-full px-10 md:text-xl"
          >Get Started</a
        >
      </div>
    </div>
  </div>
</main>
