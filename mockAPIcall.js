const axios = require('axios');
const Coin = require('./models/coin');

const coinGeckoAPIStr = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h';
const completeAPICall = async () => {
    const responseHM = await axios.get(coinGeckoAPIStr)
    console.log('Response HM', responseHM);
    try {
        const apiDataArr = (responseHM.data.sort((a, b) => a.market_cap_rank - b.market_cap_rank));
        await Coin.deleteMany();
        await Coin.insertMany(apiDataArr);
        console.log('API call was successfull.')
    } catch (errorHM) {
        console.error('API call failed: ',errorHM )
    }
}

completeAPICall()