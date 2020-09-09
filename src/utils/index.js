export const getDayData = (dataList, cityInfo) => {
  const actualWether = dataList;
  const cityInformation = cityInfo;
  const unixSunriseDate = cityInformation.sunrise;
  const unixSunsetDate = cityInformation.sunset;
  const unixDate = actualWether.dt;

  const sunrise = new Date(unixSunriseDate * 1000)
  const sunset = new Date(unixSunsetDate * 1000)
  const dateForWeather = new Date(unixDate * 1000);
  const month = dateForWeather.getMonth() + 1 < 10 ? `0${dateForWeather.getMonth() + 1}` : dateForWeather.getMonth();
  const date = `${dateForWeather.getDate()}/${month}/${dateForWeather.getFullYear()}`

  const cityName = cityInfo.name;
  const cityCountry = cityInfo.country;

  const sunriseDate = `${sunrise.getHours()}:${sunrise.getMinutes()}`;
  const sunsetDate = `${sunset.getHours()}:${sunset.getMinutes()}`;
  const windSpeed = `${Math.round(actualWether.wind.speed * 10) / 10}m/s`;
  const pressure = `${actualWether.main.pressure}hPa`;
  const weatherDesc = actualWether.weather[0].description;
  const temperature = `${Math.round(actualWether.main.temp) - 273}°C`;
  const minTemperature = `${Math.round(actualWether.main.temp_min) - 273}°C`;
  const maxTemperature = `${Math.round(actualWether.main.temp_max) - 273}°C`;
  const iconId = actualWether.weather[0].icon;
  const isDay = actualWether.sys.pod === 'd';
  const iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`

  return {
    sunriseDate,
    sunsetDate,
    windSpeed,
    pressure,
    weatherDesc,
    temperature,
    minTemperature,
    maxTemperature,
    date,
    cityName,
    cityCountry,
    iconId,
    isDay,
    iconUrl,
  }
};