<script lang="ts">
  import { onMount } from "svelte";

  import { Router, Route } from "svelte-routing";
  import Home from "./components/Home.svelte";
  import Loading from "./components/Loading.svelte";
  import Login from "./components/Login.svelte";
  import Logout from "./components/Logout.svelte";
  import NavBar from "./components/NavBar.svelte";
  import { loggedIn } from "./store";
  import { fetchFromAPI, getCookie } from "./utils";

  let loading = false;

  const handleLoggedIn = async () => {
    const session = getCookie("session");
    if (session) {
      loggedIn.update(() => true);
    }

    loading = true;
    const response = await fetchFromAPI("/profile");

    const { status } = response;

    if (status >= 200 && status < 300) {
      loggedIn.set(true);
      return;
    }
  };

  onMount(async () => {
    await handleLoggedIn();
    loading = false;
  });
</script>

<Router>
  <NavBar />
  <main>
    {#if loading}
      <Loading />
    {:else}
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    {/if}
  </main>
</Router>

<style>
  main {
    padding: 1em;
    margin: 0 auto;
    max-width: 800px;
  }
</style>
