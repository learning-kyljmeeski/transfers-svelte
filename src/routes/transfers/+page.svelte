<script>
  import { onMount } from "svelte";
  import TransfersTable from "../../components/TransfersTable.svelte";

  export let data;

  let transfers = [];

  onMount(() => {
    transfers = data.transfers;
  });
</script>

<div class="container">
  <h1>Transfers Analysis</h1>
  <a href="/">home</a>
  <TransfersTable {transfers} />
</div>

<style>
  h1 {
    text-align: center;
  }
  .container {
    font-family: monospace;
    width: 80%;
    margin: 0 auto;
    padding: 10px 0;

    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
