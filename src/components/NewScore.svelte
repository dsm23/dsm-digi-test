<script lang="ts">
  import { newScores } from "../store";

  import { fetchFromAPI } from "../utils";

  type Data = {
    error: string;
  };

  let nickname: string | undefined;
  let score: number | undefined;

  let error: string | undefined;

  let form: HTMLFormElement;

  const resetForm = () => {
    nickname = undefined;
    score = undefined;

    for (const input of form.querySelectorAll("input")) {
      const inputElem = input as HTMLInputElement;
      inputElem.blur();
    }
  };

  const handleSubmit = async () => {
    const response = await fetchFromAPI("/scores", {
      method: "POST",
      body: JSON.stringify({
        nickname,
        score,
      }),
    });

    const { status } = response;

    if (status >= 200 && status < 300) {
      newScores.set(true);

      resetForm();
    } else {
      const data: Data = await response.json();

      error = data.error;
    }
  };
</script>

<form bind:this={form} on:submit|preventDefault={handleSubmit}>
  <label for="nickname">Nickname</label>
  <input type="text" id="nickname" name="nickname" bind:value={nickname} />
  <small>e.g. Charles Bronson</small>
  <label for="score">Score</label>
  <input type="number" id="score" name="score" bind:value={score} />
  <small>e.g. mendoza</small>
  {#if error}
    <p class="error">{error}</p>
  {/if}
  <input type="submit" value="Submit" />
</form>

<style>
  .error {
    color: #b00020;
  }
</style>
