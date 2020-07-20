const axios = require('axios');





const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=723ad997ca075d3f06bbc7f053e9c87a&units=metric`)


    return resp.data.main.temp;

}






module.exports = {
    getClima
}