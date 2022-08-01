import React from "react";
import { IWeather, Months, dayOfWeek } from "../interfaces";

type CardProps = {
  weather: IWeather | null
}
function Card({ weather }: CardProps) {
  console.log(weather);
  const getCurrentDay = ():{date:string, dayOfWeek:string} => {
    const date = new Date();
    const day:number = date.getDate();
    const month:string = Months[date.getMonth()];
    const year:number = date.getFullYear();
    const dayWeek = dayOfWeek[date.getDay() - 1];
    return {
      date: `${day} ${month} ${year}`,
      dayOfWeek: dayWeek,
    };
  };
  return (
    <div className="card">
      <div className="card__gradient" />
      <div className="card__content">
        <div className="card__up">
          <p className="card__up-day">{getCurrentDay().dayOfWeek}</p>
          <p>{getCurrentDay().date}</p>
          <p className="card__up-location">
            {weather?.location.name}
            ,
            {" "}
            {weather?.location.country}
          </p>
        </div>
        <div className="card__bottom">
          <div className="icon">
            <img src={weather?.current.condition.icon} alt="" />
          </div>
          <div className="card__temp">
            <span>
              {weather?.current.temp_c}
              &deg;C
            </span>
            <span>{weather?.current.condition.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
