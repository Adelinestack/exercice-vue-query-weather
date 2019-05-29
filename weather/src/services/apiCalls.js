import { BASE_URL, API_KEY } from '../assets/const';
import axios from 'axios';

const getCityWeather = () => axios.get(`${BASE_URL}q=Paris&APPID=${API_KEY}`);

async function getWeather() {
  const {
    data: { list },
  } = await getCityWeather();
  return list;
}

export { getWeather };
