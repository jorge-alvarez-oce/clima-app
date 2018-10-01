const axios = require('axios');

const apiKey = 'f369635965b00ad16ced5da4da4b9f3b';

const getTemperature = async(latitude, longitude) => {

    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    let response = await axios.get(url);
    return response.data.main.temp;
}

module.exports = {
    getTemperature
}