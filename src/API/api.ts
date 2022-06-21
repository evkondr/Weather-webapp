import axios from "axios";

const url = "http://api.weatherapi.com/v1/current.json";
const key = "43fc100559fd40f99c2110245220606";

class API {
  static async get() {
    const response = await axios.get(url, {
      params: {
        key,
        lang: "ru",
        q: "Moscow",
      },
    });
    console.log(response.data);
    return response.data;
  }
}

export default API;
