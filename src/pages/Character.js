import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character =  async () => {

    const id = getHash();
    const character = await getData(id);
    const view = `
        <div class="Characters-inner">
            <article class="Character-card">
            <h2>"symbol": ${character[0].symbol}</h2>
            <h2>"name": ${character[0].name}</h2>
            <h2>"nameid": ${character[0].nameid}</h2>
            <h2>"rank": ${character[0].rank}</h2>
            <h2>"price_usd": ${character[0].price_usd}</h2>

            </article>

            <article class="Characters-card">
               
                <h3>"percent_change_24h": <span>${character[0].percent_change_24h}</span></h3>
                <h3>"percent_change_7d": <span>${character[0].percent_change_7d}</span> </h3>
                <h3>"price_btc": <span>${character[0].price_btc}</span></</h3>
                <h3>"market_cap_usd": <span>${character[0].market_cap_usd}</span></h3>
                <h3>"volume24": <span>${character[0].volume24}</span></h3>
                <h3>"volume24a": <span>${character[0].volume24a}</span></h3>
                <h3>"ssupply": <span>${character[0].csupply}</span></h3>
                <h3>"tsupply": <span>${character[0].tsupply}</span></h3>
                <h3>"msupply": <span>${character[0].msupply}</span></h3>

            </article>
        </div> 
    `
    return view
};
export default Character;