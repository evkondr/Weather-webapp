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
export interface IWeather{
    current: ICurrent,
    location: ILocation
}
export interface errData{
    data:{
      error: {code:number, message:string}
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
