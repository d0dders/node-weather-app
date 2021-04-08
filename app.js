const http = require('http');
const settings = require('./settings.json')

const url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${settings.apiKey}`;

const request = http.get(url, (res) => {
    if (res.statusCode === 200) {
        let responseString = "";
        res.on('data', (data) => {
            responseString += data.toString()
        });
        res.on('end', () => console.log(responseString));
    }
})


