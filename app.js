const args = require('./config/args').args;
const place = require('./place/place');
const weather = require('./weather/weather');

let getAddressAndTemperature = async(address) => {

    let addressAndCoordinates = await place.getAddressAndCoordinates(address);
    let temperature = await weather.getTemperature(addressAndCoordinates.latitude, addressAndCoordinates.longitude);

    return `El clima en ${addressAndCoordinates.address} es de ${temperature}`;
}

getAddressAndTemperature(args.address)
    .then(temperature => console.log(temperature))
    .catch(err => console.log(err));