const weather = require('./weather');

const args = process.argv.slice(2);
weather.get(args);
