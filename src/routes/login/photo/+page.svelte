<script lang="ts">
  import AuthCheck from "$lib/components/AuthCheck.svelte";
  import { user } from "$lib/firebase";
</script>

<AuthCheck>
  <h2 class="text-xl font-semibold text-white mb-4">
    Choose a Profile Picture:
  </h2>
  <div>
    {#if $user}
      <div class="avatar online">
        <div class="w-24 rounded-full border border-indigo-500">
          <img src={$user.photoURL} alt="User profile" />
        </div>
      </div>
    {/if}
  </div>
</AuthCheck>
