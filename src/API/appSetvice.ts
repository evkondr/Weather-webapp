import axios from "axios";
import { IWeather } from "../interfaces";

const url = "https://api.weatherapi.com/v1/forecast.json";
const key = process.env.REACT_APP_KEY;
type params = {
  lang:string,
  q:string,
  days:number
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
