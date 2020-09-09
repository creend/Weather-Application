const plainWeather = {
  cityCountry: "Kraj",
  cityName: "Miasto",
  date: "-",
  iconId: "",
  iconUrl: "",
  isDay: true,
  maxTemperature: "-",
  minTemperature: "-",
  pressure: "-",
  sunriseDate: "-",
  sunsetDate: "-",
  temperature: "Temp",
  weatherDesc: "Opis",
  windSpeed: "-",
};

const initialState = {
  weatherDay1:plainWeather,
  weatherDay2:plainWeather,
  weatherDay3:plainWeather,
  weatherDay4:plainWeather,
  weatherDay5:plainWeather,
  weatherDay6:plainWeather,
}

const reducer = (state = initialState, {type,payload}) => {
  switch(type){
    case 'GET_WEATHER':
      return payload;
    default:
      return state;  
  }
};

export default reducer;