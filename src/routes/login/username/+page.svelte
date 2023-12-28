<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import { db, user } from "$lib/firebase";
  import { doc, getDoc, writeBatch } from "firebase/firestore";

  let username = "";
  let loading = false;
  let isAvailable = false;

  const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
  $: isValid =
    username?.length > 2 && username.length < 16 && re.test(username);
  $: isTouched = username.length > 0;
  $: isTaken = isValid && !isAvailable && !loading;

  // @ts-ignore
  let debounceTimer: NodeJS.Timeout;
  async function checkAvailability() {
    isAvailable = false;
    loading = true;
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(async () => {
      console.log("Checking availability of ", username);
      // Get the doc ref
      const ref = doc(db, "usernames", username);

      // Check if it exists
      const result = getDoc(ref).then((doc) => doc.exists());

      isAvailable = !result;
      loading = false;
    }, 500);
  }

  async function confirmUsername() {
    console.log("confirming username ", username);
    const batch = writeBatch(db);
    batch.set(doc(db, "usernames", username), { uid: $user?.uid });
    batch.set(doc(db, "users", $user!.uid), {
      username,
      photoURL: $user?.photoURL ?? null,
      published: true,
      bio: "I am a software developer",
      links: [
        {
          title: "Upwork",
          url: "https://upwork.com",
          icon: "custom",
        },
      ],
    });

    // execute the batch
    batch.commit();
  }
</script>

<AuthCheck>
  <h2 class="text-xl font-semibold text-white mb-2">Choose a username:</h2>
  <form class="w-5/6 sm:w-3/6" on:submit|preventDefault={confirmUsername}>
    <input
      type="text"
      placeholder="Username"
      class="input w-full"
      bind:value={username}
      on:input={checkAvailability}
      class:input-error={!isValid && isTouched}
      class:input-warning={isTaken}
      class:input-success={isAvailable && isValid && !loading}
    />

    <!-- class:input-error, class:input-warning and  class:input-success comes from daisyui-->

    <div class="my-4 min-h-16 px-8 w-full">
      {#if loading}
        <p class="text-secondary">Checking availability of @{username}...</p>
      {/if}

      {#if !isValid && isTouched}
        <p class="text-error text-sm">
          must be 3-16 characters long, alphanumeric only
        </p>
      {/if}

      {#if isValid && !isAvailable && !loading}
        <p class="text-warning text-sm">
          @{username} is not available
        </p>
      {/if}

      {#if isAvailable}
        <button class="btn btn-success">Confirm Username @{username} </button>
      {/if}
    </div>
  </form>
</AuthCheck>
