import getHash from '../utils/getHash';
import getData from '../utils/getData';
import Chart from 'chart.js/auto';

const Character = async () => {
    const id = getHash();
    const character = await getData('ticker', id);

    if (!character) {
        return `<div class="error">Error loading character data. Please try again later.</div>`;
    }
    const data = {
        labels: ['24h Change', '7d Change'],
        datasets: [{
            label: 'Percentage Change',
            data: [
                parseFloat(character[0].percent_change_24h),
                parseFloat(character[0].percent_change_7d)
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: true,
        }]
    };

    const view = `
        <div class="Characters-inner">
            <article class="Characters-card">
                <h2>Symbol: ${character[0].symbol}</h2>
                <h2>Name: ${character[0].name}</h2>
                <h2>NameID: ${character[0].nameid}</h2>
                <h2>Rank: ${character[0].rank}</h2>
                <h2>Price (USD): $${character[0].price_usd}</h2>
                <button id="backButton" class="back-button">Back</button>
            </article>
            <article class="Characters-card">
                <h3>Percent Change 24h: <span>${character[0].percent_change_24h}</span></h3>
                <h3>Percent Change 7d: <span>${character[0].percent_change_7d}</span></h3>
                <h3>Price BTC: <span>${character[0].price_btc}</span></h3>
                <h3>Market Cap USD: <span>${character[0].market_cap_usd}</span></h3>
                <h3>Volume 24h: <span>${character[0].volume24}</span></h3>
                <h3>Volume 24h Alt: <span>${character[0].volume24a}</span></h3>
                <h3>Circulating Supply: <span>${character[0].csupply}</span></h3>
                <h3>Total Supply: <span>${character[0].tsupply}</span></h3>
                <h3>Max Supply: <span>${character[0].msupply}</span></h3>
            </article>
            <div class="Character-chart">
                <canvas id="characterChart"></canvas>
            </div>
        </div>
    `;
    setTimeout(() => {
        const ctx = document.getElementById('characterChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar', // Line chart
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
        const backButton = document.getElementById('backButton');
        backButton.addEventListener('click', () => {
            window.history.back();
        });
    }, 0);

    return view;
};

export default Character;
