<script lang="ts">
  import { auth } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
  import { user } from "$lib/firebase";

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const user = signInWithPopup(auth, provider);
    console.log(user);
  };
</script>

<!-- $user: We subscribe to the user store... -->
{#if $user}
  <h2 class="text-xl font-semibold">
    Welcome <span class="text-indigo-400">{$user.displayName}</span>
  </h2>
  <p class="text-green-400">You are successfully logged in</p>
  <button class="btn btn-primary text-white" on:click={() => signOut(auth)}
    >Sign Out</button
  >
{:else}
  <h2>Login</h2>
  <button class="btn btn-primary text-white" on:click={signInWithGoogle}
    >Sign in with Google</button
  >
{/if}
