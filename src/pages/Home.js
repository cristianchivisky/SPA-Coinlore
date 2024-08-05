import getData from '../utils/getData';
import Chart from 'chart.js/auto';

const Home = async () => {
  const characters = await getData('tickers');
  const marketInfo = await getData('global');


  if (!characters || !marketInfo) {
    return `<div class="error">Error loading data. Please try again later.</div>`;
  }

  const prices = characters.data.map(character => parseFloat(character.percent_change_24h)).slice(0, 20);
  const labels = characters.data.map(character => character.symbol).slice(0, 20);
  
  const view = `
    <div class="Market-info">
      <h2>Market Information</h2>
      <div class="Market-info-grid">
        <div class="Market-info-col">
          <p>Total Coins: ${marketInfo[0].coins_count}</p>
          <p>Active Markets: ${marketInfo[0].active_markets}</p>
          <p>Total Market Cap: $${marketInfo[0].total_mcap.toLocaleString()}</p>
        </div>
        <div class="Market-info-col">
          <p>Total Volume: $${marketInfo[0].total_volume.toLocaleString()}</p>
          <p>BTC Dominance: ${marketInfo[0].btc_d}%</p>
          <p>ETH Dominance: ${marketInfo[0].eth_d}%</p>
        </div>
        <div class="Market-info-col">
          <p>Market Cap Change: ${marketInfo[0].mcap_change}%</p>
          <p>Volume Change: ${marketInfo[0].volume_change}%</p>
          <p>Average Change Percent: ${marketInfo[0].avg_change_percent}%</p>
        </div>
      </div>
    </div>
    <div class="Character-chart-header">
      <canvas id="cryptoChart" width="60" height="14"></canvas>
    </div>
    <div class="search-container">
      <input type="text" id="searchInput" placeholder="Search by name...">
    </div>
    <div id="characters-container" class="Characters">
      ${characters.data.map(character => `
        <article class="Characters-item" data-name="${character.name.toLowerCase()}">
          <a href="#/${character.id}/">
            <h2>Symbol: ${character.symbol}</h2>
            <h2>Name: ${character.name}</h2>
            <h2>NameID: ${character.nameid}</h2>
            <h2>Rank: ${character.rank}</h2>
            <h2>Price (USD): $${character.price_usd}</h2>
          </a>
        </article>
      `).join('')}
    </div>
    
  `;

  setTimeout(() => {
    const ctx = document.getElementById('cryptoChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: '24h Percentage Change',
            data: prices,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, 0);
  setTimeout(() => {
    const searchInput = document.getElementById('searchInput');
    const charactersContainer = document.getElementById('characters-container');

    if (searchInput && charactersContainer) {
      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const items = charactersContainer.querySelectorAll('.Characters-item');

        items.forEach(item => {
          const name = item.getAttribute('data-name');
          if (name.includes(searchTerm)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    }
  }, 0);

  return view;
};

export default Home;
