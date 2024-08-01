const API = 'https://api.coinlore.net/api/tickers/';
const API2 = 'https://api.coinlore.net/api/ticker/';
const API3 = 'https://api.coinlore.net/api/global/';

const getData = async (type, id, start = 0) => {
    let apiURL;
    if (type === 'ticker') {
        apiURL = `${API2}?id=${id}`;
    } else if (type === 'global') {
        apiURL = API3;
    } else {
        apiURL = `${API}?start=${start}&limit=100`;
    }

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error..!!', error);
        return null; // Return null on error
    }
};

export default getData;
