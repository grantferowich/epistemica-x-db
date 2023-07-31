const Coin = require('./models/coin');

const deleteStuff = () => {
    Coin.deleteMany()
}

deleteStuff()