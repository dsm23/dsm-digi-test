<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import { newScores } from "../store";
  import { fetchFromAPI } from "../utils";
  import Loading from "./Loading.svelte";

  type Data = {
    nickname: string;
    score: number;
    rank: number;
  };

  type Payload = {
    scores: Data[];
  };

  let scores: Data[] | undefined;

  const handleFetch = async () => {
    const response = await fetchFromAPI("/scores");

    const data: Payload = await response.json();

    scores = data.scores;
  };

  onMount(handleFetch);

  $: if ($newScores) {
    handleFetch();
  }

  afterUpdate(() => {
    newScores.set(false);
  });
</script>

<div class="container">
  {#if scores}
    <div class="rank">
      <div class="title">rank</div>
      {#each scores as { rank }}
        <div>{rank}</div>
      {/each}
    </div>
    <div class="nickname">
      <div class="title">nickname</div>
      {#each scores as { nickname, rank, score }}
        <div>{nickname}</div>
        <div class="mobile">
          <div>rank: {rank}</div>
          <div>score: {score}</div>
        </div>
      {/each}
    </div>
    <div class="score">
      <div class="title">score</div>
      {#each scores as { score }}
        <div>{score}</div>
      {/each}
    </div>
  {:else}
    <Loading />
  {/if}
</div>

<style>
  .container {
    display: flex;
  }

  .title {
    font-weight: 700;
    border-bottom: 1px solid rgba(17, 24, 39);
  }

  .rank {
    width: 10%;
  }
  .nickname {
    width: 60%;
  }
  .score {
    width: 30%;
    text-align: right;
  }
  .mobile {
    display: none;
  }

  @media screen and (max-width: 700px) {
    .container {
      width: 100%;
      flex-wrap: wrap;
    }
    .rank {
      display: none;
    }

    .nickname {
      width: 100%;
    }

    .score {
      display: none;
    }
    .mobile {
      font-size: 0.75em;
      width: 100%;
      text-align: right;
      color: rgba(55, 65, 81);
    }
  }
</style>
