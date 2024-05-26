<script>
  export let data;
</script>

<div class="container">
  <a href="/">back</a>
  <h1>Player Report</h1>
  <div>
    <p>
      <span class="data-label">Name:</span>
      <span class="data-value">{data.name}</span>
    </p>
    <p>
      <span class="data-label">Previous club:</span>
      <span class="data-value">{data.previousClub}</span>
    </p>
    <p>
      <span class="data-label">Current club:</span>
      <span class="data-value">{data.newClub}</span>
    </p>
    <p>
      <span class="data-label">Transfer fee:</span>
      <span class="data-value">{data.price}</span>
    </p>
  </div>
  <div class="stats-wrapper">
    <div class="progress-bar">
      <div class="progress-bar-fill" style="width: {data.successRate}%"></div>
      <div class="progress-bar-text">Success Rate ({data.successRate}%)</div>
    </div>
    <div class="stats">
      {#each Object.entries(data.stats) as [key, value]}
        <div class="stat">
          <div class="stat-value">{value}</div>
          <div class="stat-name">{key}</div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    font-family: monospace;
    width: 80%;
    margin: 0 auto;

    padding: 10px 15px;
    min-height: 100vh;
    height: 100%;
  }
  .data-label {
    font-weight: bold;
  }
  .data-value {
    font-size: 18px;
    color: #007bff;
  }
  .stats-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .progress-bar {
    position: relative; /* Сделать позицию элемента относительной */
    width: 100%;
    height: 40px; /* Высота полоски */
    background-color: #f0f0f0; /* Цвет фона полоски */
    border-radius: 10px;
  }
  .progress-bar-fill {
    position: absolute; /* Сделать позицию элемента абсолютной */
    top: 0; /* Расположить элемент сверху внутри родительского контейнера */
    left: 0; /* Расположить элемент слева внутри родительского контейнера */
    height: 100%;
    background-color: #007bff; /* Цвет заполненной части полоски */
    border-radius: 10px;
  }
  .progress-bar-text {
    position: absolute; /* Сделать позицию элемента абсолютной */
    top: 50%; /* Расположить текст по вертикали по центру */
    left: 50%; /* Расположить текст по горизонтали по центру */
    transform: translate(-50%, -50%); /* Центрировать текст по центру полоски */
    color: #000; /* Цвет текста */
  }
  .stats {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }
  .stat {
    width: calc(33.33% - 10px); /* Ширина блока, учитывая отступы */
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
  }
  .stat-value {
    font-size: 24px; /* Размер числа */
    font-weight: bold;
  }
  .stat-name {
    font-size: 16px; /* Размер текста */
    margin-top: 5px; /* Отступ между числом и текстом */
  }
</style>
