<script lang="ts">
  import { onDestroy } from "svelte";

  import { loggedIn } from "../store";
  import NavLink from "./NavLink.svelte";

  let isLoggedIn;
  const unsubscribe = loggedIn.subscribe((value) => {
    isLoggedIn = value;
  });

  onDestroy(unsubscribe);
</script>

<ul class="nav">
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/login">Login</NavLink></li>
  {#if isLoggedIn}
    <li><NavLink to="/logout">Logout</NavLink></li>
  {/if}
</ul>

<style>
  ul.nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  ul.nav li {
    float: left;
  }

  @media screen and (max-width: 900px) {
    ul.nav {
      width: 100%;
      height: auto;
      position: relative;
    }
  }
</style>
