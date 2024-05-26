<script>
  import { onMount } from "svelte";
  import { getTransferBySearchTerm } from "$lib/api.js";
  import TransfersTable from "../components/TransfersTable.svelte";

  let searchTerm = "";
  let transfers = [];

  onMount(() => {
    const stored_transfers = localStorage.getItem("transfers");
    if (stored_transfers != null) {
      transfers = JSON.parse(stored_transfers);
    }
  })

  async function search() {
    const stored_transfers = localStorage.getItem("transfers");
    console.log(stored_transfers);
    const data = await getTransferBySearchTerm(searchTerm);
    transfers = data.transfers;
    localStorage.setItem("transfers", JSON.stringify(transfers))
  }
</script>

<div class="container">
  <h1>Transfers Analysis</h1>
  <a href="/transfers">all transfers</a>
  <div class="search-container">
    <input
      type="text"
      class="search-input"
      bind:value={searchTerm}
      placeholder="Search..."
    />
    <button class="search-button" on:click={search}>Search</button>
  </div>
  {#if transfers.length != 0}
    <TransfersTable {transfers} />
  {/if}
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
    min-height: 100vh;
    height: 100%;
    display: flex;
    gap: 15px;
    flex-direction: column;
  }
  .search-container {
    display: flex;
    gap: 15px;
    align-items: center;
    border-radius: 5px; /* Закругление углов */
    padding: 5px; /* Отступ внутри контейнера */
    width: 300px; /* Ширина контейнера */
  }
  .search-input {
    flex: 1; /* Растягиваем на всю доступную ширину */
    border: #007bff 1px solid; /* Убираем рамку у инпута */
    padding: 8px; /* Отступ внутри инпута */
    font-size: 16px; /* Размер шрифта */
    border-radius: 5px; /* Закругление углов */
    outline: none; /* Убираем обводку фокуса */
    font-family: monospace;
  }
  .search-button {
    background-color: #007bff; /* Цвет фона кнопки */
    color: white; /* Цвет текста кнопки */
    border: none; /* Убираем рамку */
    padding: 8px 15px; /* Отступы внутри кнопки */
    border-radius: 5px; /* Закругление углов */
    cursor: pointer; /* Курсор при наведении */
    transition: background-color 0.3s; /* Плавное изменение цвета при наведении */
    font-family: monospace;
  }
  .search-button:hover {
    background-color: #0056b3; /* Цвет фона при наведении */
  }
</style>
