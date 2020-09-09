import { getDayData} from 'utils'

export const getAllWeather = data => {
  
  const weatherDay1 = getDayData(data.list[0], data.city);
  const weatherDay2 = getDayData(data.list[8], data.city);
  const weatherDay3 = getDayData(data.list[16], data.city);
  const weatherDay4 = getDayData(data.list[24], data.city);
  const weatherDay5 = getDayData(data.list[32], data.city);
  const weatherDay6 = getDayData(data.list[39], data.city);

  return {
    type:'GET_WEATHER',
    payload:{
      weatherDay1,
      weatherDay2,
      weatherDay3,
      weatherDay4,
      weatherDay5,
      weatherDay6,
    },
  };
};