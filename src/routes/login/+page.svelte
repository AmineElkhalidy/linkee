<script lang="ts">
  import { auth } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
  import { user } from "$lib/firebase";
  import { goto } from "$app/navigation";

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const user = signInWithPopup(auth, provider);
    console.log(user);
  };
</script>

<!-- $user: We subscribe to the user store... -->
{#if $user}
  <h2 class="text-xl font-semibold text-white mb-5 uppercase">
    Welcome <span class="gradient-text">{$user.displayName}</span>
  </h2>
  <p class="text-green-400 mb-2">You are successfully signed in</p>
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
