const express = require("express");
var cors = require('cors')
// const PORT = process.env.PORT || 3001;
const PORT = 3001;

const app = express();
const Binance = require('binance-api-node').default;
const Binance_client = Binance();
const Axios = require('axios')



app.use(cors())
let priceEth = 0;
setInterval(async () => {
    let prices;
    try {
        prices = await Binance_client.prices()
    }
    catch (error) {
        return console.log(error);
    }
    // const prices = await Binance_client.prices()
    Object.keys(prices).forEach(function (key) {
        if (key === 'ETHUSDT') {
            priceEth = prices[key];
        }
    });
}, 2000)
app.get('/get_price_ether', function (req, res) {
    res.send({
        priceEth: priceEth
    })
});

app.get('/get_total_supply', async function (req, res) {
    let config_url = "https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x4387946a7ed6561cf3390faaac90c1f52b593f2e&apikey=GKT561CCZZB4PWB94HAPCSAD1R5BPXQTUA"
    try{
        let response = await Axios.get(config_url);
        res.send({
            totalSupply: response.data.result
        })
    }
    catch(error)
    {
        console.log(error);   
    }
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});