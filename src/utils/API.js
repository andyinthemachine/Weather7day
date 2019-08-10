import axios from "axios";
const geocoderKey = process.env.REACT_APP_GEOCODER_KEY;
const weatherKey = process.env.REACT_APP_WEATHERBIT_KEY;

export default {
    getWeather: function(location) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${geocoderKey}`)
        .then(res => {
            // console.log(res);
            const { lat, lng } = res.data.results[0].geometry.location;
            return axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherKey}&days=7&units=I`);
        })
        .catch(err => console.log(err))
       }
}