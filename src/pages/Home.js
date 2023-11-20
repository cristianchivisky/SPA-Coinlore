import getData from '../utils/getData';
import Chart from 'chart.js/auto';

const Home = async () => {
  const characters = await getData();

  const prices = characters.data.map(character => parseFloat(character.percent_change_24h)).slice(0, 20);
  const labels = characters.data.map(character => character.symbol).slice(0, 20); // Etiquetas para el eje X

  const view = `
    <div class="Characters">
      
      ${characters.data.map(character => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <h2>"symbol": ${character.symbol}</h2>
            <h2>"name": ${character.name}</h2>
            <h2>"nameid": ${character.nameid}</h2>
            <h2>"rank": ${character.rank}</h2>
            <h2>"price_usd": ${character.price_usd}</h2>
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
            label: 'Porcentaje de variacion en 24hs.',
            data: prices,
            borderColor: 'blue',
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

  return view;
};

export default Home;
