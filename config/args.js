const args = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

module.exports = {
    args
}