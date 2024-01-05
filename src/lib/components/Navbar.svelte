<script>
  import { user, auth } from "$lib/firebase";
  import { signOut } from "firebase/auth";
</script>

<header class="fixed top-5 left-0 w-full px-4 sm:px-8 md:px-10 z-50">
  <nav class="navbar bg-slate-100 rounded-full px-4">
    <div class="flex-1">
      <a href="/" class="text-xl text-black font-semibold md:text-2xl ml-3"
        >Linkee</a
      >
    </div>

    {#if $user}
      <button
        on:click={() => {
          signOut(auth);
          window.location.href = "/";
        }}
        class="btn gradient-btn text-white px-10 rounded-full border-none md:text-lg duration-300 hover:scale-110"
        >Logout</button
      >
    {:else}
      <a
        href="/login"
        class="btn gradient-btn text-white px-14 rounded-full border-none md:text-lg duration-300 hover:scale-110"
        >Login</a
      >
    {/if}
  </nav>
</header>
