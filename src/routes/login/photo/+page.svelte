<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import { userData, storage, db, user } from "$lib/firebase";
  import { doc, updateDoc } from "firebase/firestore";
  import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

  let previewURL: string;
  let uploading = false;
  $: href = `/${$userData?.username}`;

  async function upload(e: any) {
    uploading = true;
    const file = e.target.files[0];
    // Allow you to preview the image before it is uploaded...
    previewURL = URL.createObjectURL(file);

    // Uploading to firebase
    const storageRef = ref(storage, `users/${$user!.uid}/profile.png`);
    const result = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(result.ref);

    await updateDoc(doc(db, "users", $user!.uid), { photoURL: url });
    uploading = false;
  }
</script>

<AuthCheck>
  {#if $userData?.photoURL}
    <h2 class="text-xl font-semibold text-white mb-4">
      Change Your Profile Picture:
    </h2>
    <div>
      <div class="avatar">
        <div class="w-24 rounded-full border border-indigo-500">
          <img src={previewURL ?? $userData.photoURL} alt="User profile" />
        </div>
      </div>
    </div>
  {:else}
    <h2 class="text-xl font-semibold text-white mb-4">
      Upload a Profile Picture:
    </h2>
    <div>
      <div class="avatar">
        <div class="w-24 rounded-full border border-indigo-500">
          <img src={previewURL ?? "/profile.webp"} alt="User profile" />
        </div>
      </div>
    </div>
  {/if}

  <!-- Choose file input -->
  <div class="w-full">
    <div class="flex items-center justify-center w-full">
      <label
        for="photoURL"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          on:change={upload}
          id="photoURL"
          type="file"
          class="hidden"
          accept="image/png, image/jpeg, image/gif, image/webp"
        />
      </label>
    </div>

    <!-- Button -->
    <div class="mt-4">
      <a
        {href}
        class="btn btn-primary text-white px-10 font-semibold sm:text-lg"
      >
        Finish
      </a>
    </div>
  </div>
</AuthCheck>
