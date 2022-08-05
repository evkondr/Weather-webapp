type condition = {
    code: number,
    text: string,
    icon: string
}
interface ICurrent{
    cloud: number,
    condition: condition,
    feelslike_c: number,
    feelslike_f: number,
    gust_kph: number,
    gust_mph: number,
    humidity: number,
    is_day: number,
    last_updated: string,
    last_updated_epoch: number
    precip_in: number,
    precip_mm: number,
    pressure_in: number,
    pressure_mb: number,
    temp_c: number,
    temp_f: number,
    uv: number,
    vis_km: number,
    vis_miles: number,
    wind_degree: number,
    wind_dir: string,
    wind_kph: number,
    wind_mph: number,
}
interface ILocation{
    country: string,
    lat: number,
    localtime: string,
    localtime_epoch: number,
    lon: number,
    name: string,
    region: string,
    tz_id: string,
}
export interface IDay{
    avghumidity: number,
    avgtemp_c: number,
    avgtemp_f: number,
    avgvis_km: number,
    avgvis_miles: number,
    condition: condition
    daily_chance_of_rain: number,
    daily_chance_of_snow: number,
    daily_will_it_rain: number,
    daily_will_it_snow: number,
    maxtemp_c: number,
    maxtemp_f: number,
    maxwind_kph: number,
    maxwind_mph: number,
    mintemp_c: number,
    mintemp_f: number,
    totalprecip_in: number,
    totalprecip_mm: number,
    uv: number
}
export interface IForecastDay{
    day: IDay
}
export interface IForecast{
    forecastday: IForecastDay[]
}
export interface IWeather{
    current: ICurrent,
    location: ILocation,
    forecast: IForecast
}
export interface errData{
    data:{
      error: {
            code:number,
            message:string
        }
    }
  }
export enum Months {
    "янв",
    "фев",
    "мар",
    "апр",
    "май",
    "июня",
    "июля",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек"
}
export enum dayOfWeek {
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
}
