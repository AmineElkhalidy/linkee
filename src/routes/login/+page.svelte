<script lang="ts">
  import { auth } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { user } from "$lib/firebase";
  import { goto } from "$app/navigation";

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const userData = signInWithPopup(auth, provider);
    console.log(userData);
  };
</script>

<!-- $user: We subscribe to the user store... -->
{#if $user}
  <h2 class="text-xl md:text-2x font-semibold text-white uppercase">
    Welcome <span class="gradient-text">{$user.displayName}</span>
  </h2>

  <div class="mb-4">
    <p class="text-gray-200 text-lg -mb-1">We are happy to see you around!</p>
    <p class="text-gray-200 text-lg">Start customizing/adding your info!</p>
  </div>
  <button
    class="btn btn-primary text-white text-lg px-10"
    on:click={() => goto("/login/username")}>Next</button
  >
{:else}
  <h2 class="text-xl text-white font-semibold mb-2">Sign in to your account</h2>
  <button class="btn btn-primary text-white text-lg" on:click={signInWithGoogle}
    >Sign in with Google</button
  >
{/if}
