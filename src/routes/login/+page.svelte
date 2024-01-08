<script lang="ts">
  import { auth } from "$lib/firebase";
  import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
  import { user } from "$lib/firebase";
  import { goto } from "$app/navigation";

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const credentiel = await signInWithPopup(auth, provider);

    const idToken = await credentiel.user.getIdToken();

    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    });
  };
</script>

<!-- $user: We subscribe to the user store... -->
{#if $user}
  <h2 class="text-xl md:text-2xl font-semibold text-white uppercase mb-2">
    Welcome <span class="gradient-text">{$user.displayName}</span>
  </h2>

  <button
    class="btn btn-primary text-white sm:text-lg px-10"
    on:click={() => goto("/login/username")}>Change Username</button
  >
{:else}
  <h2 class="text-xl text-white font-semibold mb-2">Sign in to your account</h2>
  <button
    class="btn btn-primary text-white sm:text-lg"
    on:click={signInWithGoogle}>Sign in with Google</button
  >
{/if}
