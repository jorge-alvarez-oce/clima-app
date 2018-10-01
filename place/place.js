const axios = require('axios');

const apiKey = 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI';

const getAddressAndCoordinates = async(address) => {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${apiKey}`;

    let response = await axios.get(url)

    if (response.data.results.length === 0) {
        throw new Error('No found results');
    }

    let result = response.data.results[0];
    let coordinates = result.geometry.location;

    return {
        address: result.formatted_address,
        latitude: coordinates.lat,
        longitude: coordinates.lng
    }
}

module.exports = {
    getAddressAndCoordinates
}