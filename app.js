const weather = require('./weather');

const query = process.argv.slice(2).join('%20');
weather.get(query);
