const http = require('http');
const settings = require('./settings.json')

function get(location) {
    const request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location[0]}&appid=${settings.apiKey}`, (res) => {
        if (res.statusCode === 200) {
            let responseString = "";
            res.on('data', (data) => {
                responseString += data.toString()
            });
            res.on('end', () => console.log(responseString));
        }
    });
}

module.exports.get = get;