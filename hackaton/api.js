var express = require('express');
var app = express(); 
var PORT = 3000;
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


app.use(express.json());


app.use(express.urlencoded({ extended: true }));
  
app.post('/getExchange', function (req, res) {
    
    let convertionData = req.body
    let currencyEl_one = "USD";
    let currencyEl_two = convertionData.currency;
    let amountEl_one = convertionData.Amount;
    let amountEl_two  
    async function calculate() {
    let currency_one = currencyEl_one;
    let currency_two = currencyEl_two;

   await fetch(`https://v6.exchangerate-api.com/v6/e1a87fb330e84803f945906e/latest/${currency_one}`)
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        const rate = data.conversion_rates[currency_two];
        amountEl_two = (amountEl_one * rate).toFixed(2);
        });
        console.log("amount : "+amountEl_two);  
    }
    calculate();
    
});


app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});