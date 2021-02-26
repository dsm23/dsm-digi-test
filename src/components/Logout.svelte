<script lang="ts">
  import { navigate } from "svelte-routing";
  import { loggedIn } from "../store";
  import { fetchFromAPI } from "../utils";
  type Data = {
    error: string;
  };

  let error: undefined | string;

  const handleLogout = async () => {
    const response = await fetchFromAPI("/logout", {
      method: "POST",
    });

    const { status } = response;

    if (status >= 200 && status < 300) {
      loggedIn.set(false);
    } else {
      const data: Data = await response.json();
      error = data.error;
    }
  };

  $: if (!$loggedIn) {
    navigate("/login", {
      replace: true,
    });
  }
</script>

<p>Are you sure you want to Logout?</p>
<button on:click={handleLogout}>Yes</button>
{#if error}
  <p class="error">Something went wrong. Please try again</p>
{/if}

<style>
  .error {
    color: #b00020;
  }
</style>
