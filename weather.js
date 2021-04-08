const http = require('http');
const settings = require('./.settings.json')


function printWeather(weather){
    const temp = weather.main.temp;
    const location = weather.name;
    console.log(`The temperature in ${location} is ${temp}`);
}

function printError(error){
    console.error(error.message);
}


function get(location) {
    try{
        const request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${settings.apiKey}`, (res) => {
            if (res.statusCode === 200) {
                let responseString = "";
                res.on('data', (data) => {
                    responseString += data.toString()
                });
                res.on('end', () => {
                    try{
                        const requestJson = JSON.parse(responseString);
                        printWeather(requestJson);
                    } catch(error){
                        printError(error);
                    }
                    
                });
            } else {
                const statusError = new Error(`Request for ${location} caused a ${http.STATUS_CODES[res.statusCode]} error`);
                printError(statusError);
            }
        });
    } catch(error){
        printError(error);
    }
    
}

module.exports.get = get;