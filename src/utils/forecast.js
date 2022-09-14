const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=8c709b69f3415dfff994c13685930d13&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      const currentWeather = response.body.current;
      callback(
        undefined,
        `${currentWeather.weather_descriptions[0]}. It is currently ${currentWeather.temperature} degrees out. It feels like ${currentWeather.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
