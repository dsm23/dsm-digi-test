<script lang="ts">
  import { navigate } from "svelte-routing";
  import { loggedIn } from "../store";

  import NewScore from "./NewScore.svelte";
  import Scores from "./Scores.svelte";

  $: if (!$loggedIn) {
    navigate("/login", {
      replace: true,
    });
  }
</script>

<h1>High Scores</h1>
<Scores />

<h1>Add new score</h1>
<NewScore />
