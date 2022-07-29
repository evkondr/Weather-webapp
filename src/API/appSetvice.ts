import axios from "axios";
import { IWeather } from "../interfaces";

const url = "http://api.weatherapi.com/v1/forecast.json";
const key = "43fc100559fd40f99c2110245220606";
type params = {
  lang:string,
  q:string,
  day:number
}
class appSetvice {
  static async getWeather(params:params) {
    const response = await axios.get(url, {
      params: {
        key,
        ...params,
      },
    });
    return response.data as IWeather;
  }
}

export default appSetvice;
