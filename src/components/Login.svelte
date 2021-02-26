<script lang="ts">
  import { navigate } from "svelte-routing";
  import { loggedIn } from "../store";
  import { fetchFromAPI } from "../utils";

  type Data = {
    error: string;
  };

  let user = {
    name: "",
    password: "",
  };

  let error;

  const handleSubmit = async () => {
    const response = await fetchFromAPI("/login", {
      method: "POST",
      body: JSON.stringify({
        username: user.name,
        password: user.password,
      }),
    });

    const { status } = response;

    if (status >= 200 && status < 300) {
      loggedIn.set(true);

      navigate("/");
    } else {
      const data: Data = await response.json();
      error = data.error;
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label for="username">Username</label>
  <input type="text" id="username" name="username" bind:value={user.name} />
  <small>e.g. jason</small>
  <label for="password">Password</label>
  <input
    type="password"
    id="password"
    name="password"
    bind:value={user.password}
  />
  <small>e.g. mendoza</small>
  {#if error}
    <p class="error">{error}</p>
  {/if}
  <input type="submit" value="Submit" />
  <pre>{JSON.stringify(user, null, 2)}</pre>
</form>

<style>
  .error {
    color: #b00020;
  }
</style>
